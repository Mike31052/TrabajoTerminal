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


@NgModule({
  declarations: [
    MenuComponent,
    IngresosComponent,
    DeduccionesComponent,
    DeterminacionComponent,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    SueldosRoutingModule,
    MatTabsModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule,
    PrincipalModule
  ]
})
export class SueldosModule { }
