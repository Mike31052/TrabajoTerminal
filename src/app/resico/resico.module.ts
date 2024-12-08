import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EscogerDeclaracionComponent } from './escoger-declaracion/escoger-declaracion.component';
import { PrincipalModule } from '../principal/principal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

//servicios
import { MensualIvaTransferService } from '../shared/mensual-iva-transfer/mensual-iva-transfer.service';
import { MensualIsrTransferService } from '../shared/mensual-isr-transfer/mensual-isr-transfer.service';
import { AnualTransferService } from '../shared/anual-transfer/anual-transfer.service';


// Importa el componente
import { MensualResicoComponent } from './mensual-resico/mensual-resico.component'; 
import { MensualISRIngresosComponent } from './mensual-isr-ingresos/mensual-isr-ingresos.component';
import { MensualIsrDetComponent } from './mensual-isr-det/mensual-isr-det.component';
import { MensualIsrPagoComponent } from './mensual-isr-pago/mensual-isr-pago.component';
import { MensualIvaResicoComponent } from './mensual-iva-resico/mensual-iva-resico.component';
import { MensualIvaDetComponent } from './mensual-iva-det/mensual-iva-det.component';
import { MensualIvaPagoComponent } from './mensual-iva-pago/mensual-iva-pago.component';
import { AnualResicoComponent } from './anual-resico/anual-resico.component';
import { AnualIngresosComponent } from './anual-ingresos/anual-ingresos.component';
import { AnualDetComponent } from './anual-det/anual-det.component';
import { AnualPagoComponent } from './anual-pago/anual-pago.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnuaDetalleIngresoEfectivamenteComponent } from './anua-detalle-ingreso-efectivamente/anua-detalle-ingreso-efectivamente.component';
import { AnualDetallePagosMensualesComponent } from './anual-detalle-pagos-mensuales/anual-detalle-pagos-mensuales.component';
import { DatosAnualComponent } from './datos-anual/datos-anual.component';
import { DatosMensualIvaComponent } from './datos-mensual-iva/datos-mensual-iva.component';
import { DatosMensualIsrComponent } from './datos-mensual-isr/datos-mensual-isr.component';


// Agrega una ruta si necesitas navegación
const routes: Routes = [
  { path: 'escoger-declaracion', component: EscogerDeclaracionComponent },
  { path: 'mensual-resico', component: MensualResicoComponent }, 
  { path: 'mensual_ISR_ingresos', component: MensualISRIngresosComponent},
  { path: 'mensual-isr-det', component: MensualIsrDetComponent},
  { path: 'mensual-isr-pago', component: MensualIsrPagoComponent},
  { path: 'mensual-iva-resico', component: MensualIvaResicoComponent},
  { path: 'mensual-iva-det', component: MensualIvaDetComponent},
  { path: 'mensual-iva-pago', component: MensualIvaPagoComponent},
  { path: 'anual-resico', component: AnualResicoComponent},
  { path: 'anual-ingresos', component: AnualIngresosComponent},
  { path: 'anual-det', component: AnualDetComponent},
  { path: 'anual-pago', component: AnualPagoComponent},
  { path: 'anual-detalle-ingreso-efectivamente', component: AnuaDetalleIngresoEfectivamenteComponent},
  { path: 'anual-detalle-pagos-mensuales', component: AnualDetallePagosMensualesComponent}

];

@NgModule({

  declarations: [
    EscogerDeclaracionComponent,
    MensualResicoComponent,
    MensualISRIngresosComponent,
    MensualIsrDetComponent,
    MensualIsrPagoComponent,
    MensualIvaResicoComponent,
    MensualIvaDetComponent,
    MensualIvaPagoComponent,
    AnualResicoComponent,
    AnualIngresosComponent,
    AnualDetComponent,
    AnualPagoComponent,
    AnuaDetalleIngresoEfectivamenteComponent,
    AnualDetallePagosMensualesComponent,
    DatosAnualComponent,
    DatosMensualIvaComponent,
    DatosMensualIsrComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrincipalModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    AnualIngresosComponent,
  ],
  providers:[
    MensualIvaTransferService,
    MensualIsrTransferService,
    AnualTransferService,
  ],
})
export class ResicoModule {
  
 }
