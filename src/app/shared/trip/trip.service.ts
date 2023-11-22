import { Injectable } from '@angular/core'
import { ReplaySubject, Subject, takeUntil } from 'rxjs'
import { Trip } from './trip'
import { UrlConstants } from '../url.constants'
import { ApiService } from '../api.service'

@Injectable({
  providedIn: 'root',
})
export class TripService {
  tripsSub = new ReplaySubject<Trip[]>()

  private destroy = new Subject<void>()

  constructor(private api: ApiService, private urls: UrlConstants) {
    this.getAll()
  }

  getAll() {
    this.api
      .get(this.urls.GET_ALL_TRIPS_URL)
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => this.tripsSub.next(response))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }
}
