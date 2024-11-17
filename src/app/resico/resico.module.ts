import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EscogerDeclaracionComponent } from './escoger-declaracion/escoger-declaracion.component';
import { PrincipalModule } from '../principal/principal.module';

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
    AnualPagoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrincipalModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule, // Importar panel de expansión
    MatFormFieldModule, // Importar campo de formulario
    MatInputModule,
  ],
  exports: [RouterModule]
})
export class ResicoModule { }

