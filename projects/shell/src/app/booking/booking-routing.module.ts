import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flight',
    pathMatch: 'full'
  },
  {
    path: 'flight',
    loadChildren: () => import('./flight/flight.module')
      .then(esm => esm.FlightModule)
  },
  {
    path: 'passenger',
    loadChildren: () => import('./passenger/passenger.module')
      .then(esm => esm.PassengerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
