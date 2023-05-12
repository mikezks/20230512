import { DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectBookingFeature } from '../../../+state/booking.state';
import { CardComponent } from '../../ui/card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    NgIf, NgFor, DatePipe, JsonPipe,
    RouterLink,
    FormsModule,
    CardComponent
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  from = signal('Paris');
  to = signal('London');
  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });
  bookingFeature = injectBookingFeature();

  updateBasket(id: number, selected: boolean): void {
    this.basket.mutate(
      basket => { basket[id] = selected; }
    );
  }
}
