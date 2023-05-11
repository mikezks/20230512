import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';
import { SearchComponent } from './features/search/search.component';
import { EditComponent } from './features/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './ui/card.component';


@NgModule({
  declarations: [
    SearchComponent,
    EditComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightModule { }
