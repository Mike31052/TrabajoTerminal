import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DetRegFisComponent } from './det-reg-fis/det-reg-fis.component';
import { DetRegimenRoutingModule } from './det-regimen-routing.module';
import { FormsModule } from '@angular/forms';
import { InfoRegComponent } from './info-reg/info-reg.component';



@NgModule({
  declarations: [
    DetRegFisComponent,
    InfoRegComponent
  ],
  imports: [
    CommonModule,
    DetRegimenRoutingModule,
    MatIconModule,
    FormsModule
  ]
})
export class DetRegimenModule { }
