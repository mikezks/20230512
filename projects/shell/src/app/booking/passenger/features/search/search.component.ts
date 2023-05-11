import { Component, inject } from '@angular/core';
import { PassengerService } from '../../logic/data-access/passenger.service';
import { Passenger } from '../../logic/model/passenger';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  firstname = '';
  lastname = 'Smith';
  selectedPassenger?: Passenger;
  #passengerService = inject(PassengerService)

  get passengers() {
    return this.#passengerService.passengers;
  }

  search(): void {
    if (!(this.firstname || this.lastname)) return;

    this.#passengerService.load(this.firstname, this.lastname);
  }

  select(passenger: Passenger): void {
    this.selectedPassenger = this.selectedPassenger === passenger ? undefined : passenger;
  }
}
