import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { DetRegimenRoutingModule } from './det-regimen-routing.module';
import { DetRegFisComponent } from './det-reg-fis/det-reg-fis.component';


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
