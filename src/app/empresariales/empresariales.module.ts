import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EmpresarialesRoutingModule } from './empresariales-routing.module';

import { DatosComponent } from './datos/datos.component';
import { DeduccionesComponent } from './deducciones/deducciones.component';
import { DeduccionesaComponent } from './deduccionesa/deduccionesa.component';
import { EmpanualComponent } from './empanual/empanual.component';
import { EmpmensualComponent } from './empmensual/empmensual.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { IsraComponent } from './isra/isra.component';
import { IsrmComponent } from './isrm/isrm.component';

import { IvamComponent } from './ivam/ivam.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Elimina esta línea
import { PrincipalModule } from '../principal/principal.module';
import { SafeUrlPipe } from './safe-url.pipe'; // Importar el Pipe




@NgModule({
  declarations: [
    DatosComponent,
    EmpmensualComponent,
    IvamComponent,
    IsrmComponent,
    DeduccionesComponent,
    InfoDialogComponent,
    IsraComponent,
    SafeUrlPipe,
    DeduccionesaComponent,
    EmpanualComponent,
  ],
  imports: [
    CommonModule,
    EmpresarialesRoutingModule,
    PrincipalModule,
    FormsModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    PrincipalModule,
    ReactiveFormsModule,
  ]
})
export class EmpresarialesModule { }
