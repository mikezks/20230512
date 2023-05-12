import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { SearchComponent } from './features/search/search.component';
import { EditComponent } from './features/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        PassengerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SearchComponent,
        EditComponent
    ]
})
export class PassengerModule { }
