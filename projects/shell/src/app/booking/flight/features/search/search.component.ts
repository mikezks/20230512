import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { injectBookingFeature } from '../../../+state/booking.state';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../ui/card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    NgFor, AsyncPipe, JsonPipe,
    FormsModule,
    CardComponent
  ],
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
