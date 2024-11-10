import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { SueldosRoutingModule } from './sueldos-routing.module';
import { MenuComponent } from './menu/menu.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { DeduccionesComponent } from './deducciones/deducciones.component';
import { DeterminacionComponent } from './determinacion/determinacion.component';
import { FormsModule } from '@angular/forms';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { PrincipalModule } from '../principal/principal.module';
import { AddIngresoComponent } from './add-ingreso/add-ingreso.component';
import { AddIngresoAsimiladoComponent } from './add-ingreso-asimilado/add-ingreso-asimilado.component';
import { AddIngresoSueldoComponent } from './add-ingreso-sueldo/add-ingreso-sueldo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddDeduccionComponent } from './add-deduccion/add-deduccion.component';

@NgModule({
  declarations: [
    MenuComponent,
    IngresosComponent,
    DeduccionesComponent,
    DeterminacionComponent,
    InfoDialogComponent,
    AddIngresoComponent,
    AddIngresoAsimiladoComponent,
    AddIngresoSueldoComponent,
    AddDeduccionComponent,
  ],
  imports: [
    CommonModule,
    SueldosRoutingModule,
    MatTabsModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule,
    PrincipalModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SueldosModule { }
