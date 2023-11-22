import { Component } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { Trip } from '../trip'
import { TripService } from '../trip.service'

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
})
export class TripComponent {
  trips: Trip[] = []

  private destroy = new Subject<void>()

  constructor(private stateService: TripService) {}

  ngOnInit() {
    this.stateService.tripsSub
      .pipe(takeUntil(this.destroy))
      .subscribe((trips) => (this.trips = trips))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }
}
