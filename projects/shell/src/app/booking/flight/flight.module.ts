import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './features/edit/edit.component';
import { FlightRoutingModule } from './flight-routing.module';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightModule { }
