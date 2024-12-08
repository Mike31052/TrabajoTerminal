import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { EmpanualComponent } from './empanual/empanual.component';
import { EmpmensualComponent } from './empmensual/empmensual.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: 'edatos', component: DatosComponent },
  { path: 'empmensual', component: EmpmensualComponent},
  { path: 'empanual', component: EmpanualComponent},
  { path: 'empresarial', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresarialesRoutingModule { }
