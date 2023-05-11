import { Component } from '@angular/core';
import { injectBookingFeature } from '../../../+state/booking.state';

@Component({
  selector: 'app-flight-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  from = 'Paris';
  to = 'London';
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };
  bookingFeature = injectBookingFeature();
}
