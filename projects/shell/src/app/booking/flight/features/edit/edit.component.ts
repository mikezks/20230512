import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { injectBookingFeature } from '../../../+state/booking.state';

@Component({
    selector: 'app-flight-edit',
    templateUrl: './edit.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})
export class EditComponent {
  editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    from: [''],
    to: [''],
    date: [new Date().toISOString()],
    delayed: [false]
  });
  #bookingFeature = injectBookingFeature();

  save(): void {
    this.#bookingFeature.save(this.editForm.getRawValue());
  }
}
