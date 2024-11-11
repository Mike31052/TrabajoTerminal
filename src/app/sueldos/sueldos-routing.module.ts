import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddDeduccionComponent } from './add-deduccion/add-deduccion.component';

const routes: Routes = [
  { path: 'ejercicio', component: MenuComponent },
  { path: 'prueba', component: AddDeduccionComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SueldosRoutingModule { }
