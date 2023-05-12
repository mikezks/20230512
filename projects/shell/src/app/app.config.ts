import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideRouterFeature } from './booking/+state/router.state';
import { CoreModule } from './core/core.module';

export const config: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withComponentInputBinding(),
      // withPreloading(PreloadAllModules)
    ),
    provideStore(),
    provideEffects(),
    provideRouterFeature(),
    isDevMode() ? provideStoreDevtools(): [],
    importProvidersFrom(
      CoreModule
    )
  ]
};
