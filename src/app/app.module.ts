import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { GridModule } from '@progress/kendo-angular-grid'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonsModule } from '@progress/kendo-angular-buttons'
import { TripComponent } from './shared/trip/trip-component/trip.component'
import { DriverComponent } from './shared/driver/driver-component/driver.component'

@NgModule({
  declarations: [AppComponent, TripComponent, DriverComponent],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
