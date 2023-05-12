import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { validatePassengerStatus } from '../../util/validation/passenger-status.validator';
import { PassengerService } from './../../logic/data-access/passenger.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-passenger-edit',
    templateUrl: './edit.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf]
})
export class EditComponent {
  editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    firstName: [''],
    name: [''],
    bonusMiles: [0],
    passengerStatus: ['', [
      validatePassengerStatus(['A', 'B', 'C'])
    ]]
  });
  #passengerService = inject(PassengerService);

  save(): void {
    this.#passengerService.save(this.editForm.getRawValue())
      .subscribe();
  }
}
