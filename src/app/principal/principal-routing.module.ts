import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuzonComponent } from './buzon/buzon.component';
import { EfirmaComponent } from './efirma/efirma.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
import { RyoComponent } from './ryo/ryo.component';
import { VerificacionesComponent } from './verificaciones/verificaciones.component';

import { BefirmaComponent } from './befirma/befirma.component';
import { BeypComponent } from './beyp/beyp.component';
import { BisrComponent } from './bisr/bisr.component';
import { BivaComponent } from './biva/biva.component';
import { BpremiosComponent } from './bpremios/bpremios.component';
import { BresicoComponent } from './bresico/bresico.component';
import { BrfcComponent } from './brfc/brfc.component';
import { BsalariosComponent } from './bsalarios/bsalarios.component';
import { BtecnologicasComponent } from './btecnologicas/btecnologicas.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Efirma', component: EfirmaComponent },
  { path: 'RyO', component: RyoComponent},
  { path: 'Buzon', component: BuzonComponent},
  { path: 'Listado', component: ListadoComponent},
  { path: 'Verificaciones', component: VerificacionesComponent},
  { path: 'brfc', component: BrfcComponent}, 
  {path: 'beyp', component: BeypComponent},
  {path: 'bisr', component:BisrComponent},
  {path: 'biva', component: BivaComponent},
  {path: 'bpremios', component: BpremiosComponent},
  {path: 'bresico', component: BresicoComponent},
  {path: 'bsalarios', component: BsalariosComponent},
  {path:'btecnologicas', component: BtecnologicasComponent},
  {path: 'befirma', component: BefirmaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
