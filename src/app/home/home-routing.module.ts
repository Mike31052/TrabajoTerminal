import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuzonComponent } from './buzon/buzon.component';
import { EfirmaComponent } from './efirma/efirma.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
import { RyoComponent } from './ryo/ryo.component';
import { VerificacionesComponent } from './verificaciones/verificaciones.component';

const routes: Routes = [
  
  { path: 'Efirma', component: EfirmaComponent },
  { path: 'RyO', component: RyoComponent},
  { path: 'Buzon', component: BuzonComponent},
  { path: 'Listado', component: ListadoComponent},
  { path: 'Verificaciones', component: VerificacionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
