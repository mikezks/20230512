import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideBookingFeature } from './+state/booking.state';

const routes: Routes = [
  {
    path: '',
    providers: [
      provideBookingFeature()
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        loadChildren: () => import('./flight/flight.routes')
      },
      {
        path: 'passenger',
        loadChildren: () => import('./passenger/passenger.module')
          .then(esm => esm.PassengerModule)
      }
    ]
  }

];

export default routes;
