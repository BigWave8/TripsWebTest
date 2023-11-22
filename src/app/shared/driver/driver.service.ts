import { Injectable } from '@angular/core'
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs'
import { Driver } from './driver'
import { ApiService } from '../api.service'
import { UrlConstants } from '../url.constants'

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  driversSub = new ReplaySubject<Driver[]>()

  private destroy = new Subject<void>()

  constructor(private api: ApiService, private urls: UrlConstants) {
    this.getAll()
  }

  getAll() {
    this.api
      .get(this.urls.GET_ALL_DRIVERS_IDS_URL)
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => this.driversSub.next(response))
  }

  getAllWithCalculatedPayableTime() {
    this.api
      .get(this.urls.GET_ALL_DRIVERS_WITH_PAYABLE_TIME_URL)
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => this.driversSub.next(response))
  }

  ngOnDestroy() {
    this.destroy.next()
    this.destroy.complete()
  }
}
