import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { AppRoutingModule, routes } from './app/app.routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes,
        withComponentInputBinding(),
        withPreloading(PreloadAllModules)
      ),
      importProvidersFrom(
        CoreModule
      )
    ]
})
  .catch(err => console.error(err));
