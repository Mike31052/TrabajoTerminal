import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { DeduccionesComponent } from './deducciones/deducciones.component';
import { DeterminacionComponent } from './determinacion/determinacion.component';

const routes: Routes = [
  { path: 'ejercicio', component: MenuComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SueldosRoutingModule { }
