import { Component, DestroyRef, Injector, Input, effect, inject, runInInjectionContext } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { injectBookingFeature } from '../../../+state/booking.state';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html'
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
  #injector = inject(Injector);
  #destroyRef = inject(DestroyRef);

  constructor() {
    this.#destroyRef.onDestroy(
      () => { console.log('Ciao!') }
    )
  }

  save(): void {
    this.#bookingFeature.save(this.editForm.getRawValue());

    runInInjectionContext(
      this.#injector,
      () => effect(() => {
        this.editForm.patchValue(
          this.#bookingFeature.activeFlight()
        );
      }, { manualCleanup: true })
    )


  }
}
