import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuzonComponent } from './buzon/buzon.component';
import { EfirmaComponent } from './efirma/efirma.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
import { RyoComponent } from './ryo/ryo.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Efirma', component: EfirmaComponent },
  { path: 'RyO', component: RyoComponent},
  { path: 'Buzon', component: BuzonComponent},
  { path: 'Listado', component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
