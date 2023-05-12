import { DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
  flights = toSignal(
    this.bookingFeature.flights$,
    { initialValue: [] }
  );
  flightInfo = computed(
    () => `Flight from ${ this.from () } to ${ this.to() }.`
  );

  constructor() {

  }

  updateBasket(id: number, selected: boolean): void {
    this.basket.mutate(
      basket => { basket[id] = selected; }
    );
  }
}
