import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        BrowserModule,
        AppRoutingModule,
        CoreModule
      )
    ]
})
  .catch(err => console.error(err));
