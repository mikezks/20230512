import { ChangeDetectorRef } from '@angular/core';
import { DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectBookingFeature } from '../../../+state/booking.state';
import { CardComponent } from '../../ui/card.component';
import { zoneless } from '@angular-architects/demo/signals-zoneless';
import { effect } from 'projects/shared-util-signals-zoneless/src/lib/angular/core';

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
  from = zoneless.signal('Paris');
  to = zoneless.signal('London');
  basket = zoneless.signal<Record<number, boolean>>({
    3: true,
    5: true,
  });
  bookingFeature = injectBookingFeature();
  flights = zoneless.toSignal(this.bookingFeature.flights$);
  #cd = inject(ChangeDetectorRef);

  constructor() {
    zoneless.effect(
      () => {
        this.from();
        this.to();
        this.basket();
        this.flights();

        this.#cd.detectChanges();
      }
    );
  }

  updateBasket(id: number, selected: boolean): void {
    this.basket.mutate(
      basket => { basket[id] = selected; }
    );
  }
}
