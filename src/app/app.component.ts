import { Component } from '@angular/core'
import { DriverService } from './shared/driver/driver.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TripsTestWeb'
  showDriversTable = false

  public selectedChange(setTable: boolean): void {
    this.showDriversTable = setTable
  }

  constructor(public stateDriverService: DriverService) {}
}
