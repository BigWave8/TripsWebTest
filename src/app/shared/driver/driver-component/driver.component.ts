import { Component } from '@angular/core'
import { DriverService } from '../driver.service'
import { Driver } from '../driver'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent {
  drivers: Driver[] = []

  private destroy = new Subject<void>()

  constructor(private stateService: DriverService) {}

  ngOnInit() {
    this.stateService.driversSub
      .pipe(takeUntil(this.destroy))
      .subscribe((drivers) => (this.drivers = drivers))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }
}
