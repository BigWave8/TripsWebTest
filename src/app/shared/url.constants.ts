import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UrlConstants {
  private PREFIX: string = 'https://localhost:7114/api/'
  public GET_ALL_TRIPS_URL: string = this.PREFIX + 'Trip'
  public GET_ALL_DRIVERS_IDS_URL: string =
    this.PREFIX + 'Driver/GetAllDriversIds'
  public GET_ALL_DRIVERS_WITH_PAYABLE_TIME_URL: string =
    this.PREFIX + 'Driver/GetAllDriversWithPayableTime'
}
