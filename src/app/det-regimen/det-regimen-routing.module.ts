import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetRegFisComponent } from './det-reg-fis/det-reg-fis.component';

const routes: Routes = [
  { path: 'det-reg-fis', component: DetRegFisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetRegimenRoutingModule { }
