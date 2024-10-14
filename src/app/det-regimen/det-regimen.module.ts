import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DetRegFisComponent } from './det-reg-fis/det-reg-fis.component';
import { DetRegimenRoutingModule } from './det-regimen-routing.module';


@NgModule({
  declarations: [
    DetRegFisComponent
  ],
  imports: [
    CommonModule,
    DetRegimenRoutingModule,
    MatIconModule
  ]
})
export class DetRegimenModule { }
