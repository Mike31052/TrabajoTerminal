import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'ejercicio', component: MenuComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SueldosRoutingModule { }