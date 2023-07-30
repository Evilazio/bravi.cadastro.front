import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatotipoRoutingModule } from './contatotipo-routing.module';
import { ContatotipoListaComponent } from './contatotipo-lista/contatotipo-lista.component';
import { FilterPipeModule } from '../pipes/filter/filter.pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContatotipoListaComponent
  ],
  imports: [
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContatotipoRoutingModule
  ]
})
export class ContatotipoModule { }
