import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmpresarialesRoutingModule } from './empresariales-routing.module';

import { DatosComponent } from './datos/datos.component';

import { FormsModule } from '@angular/forms'; // Elimina esta línea
import { PrincipalModule } from '../principal/principal.module';



@NgModule({
  declarations: [
    DatosComponent
  ],
  imports: [
    CommonModule,
    EmpresarialesRoutingModule,
    PrincipalModule,
    FormsModule
  ]
})
export class EmpresarialesModule { }
