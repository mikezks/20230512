import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookingRoutingModule } from './booking-routing.module';
import { bookingFeature, loadFlights$, saveFlight$ } from './+state/booking.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingRoutingModule,
    StoreModule.forFeature(bookingFeature),
    EffectsModule.forFeature({ loadFlights$, saveFlight$ })
  ]
})
export class BookingModule { }
