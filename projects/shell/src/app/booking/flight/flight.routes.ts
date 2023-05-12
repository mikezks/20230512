import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { EditComponent } from './features/edit/edit.component';
import { SearchComponent } from './features/search/search.component';
import { delay, map, of } from 'rxjs';
import { FlightService } from './logic/data-access/flight.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchComponent,
        resolve: {
          name: () => of('Patrick').pipe(delay(0))
        },
        data: {
          name: 'Peter'
        },
        canMatch: [
          () => {
            const router = inject(Router);

            return inject(FlightService).isAllowed$.pipe(
              map(isAllowed => isAllowed || router.createUrlTree(['/home']))
            );
          }
        ]
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }
    ]
  }
];

export default routes;
