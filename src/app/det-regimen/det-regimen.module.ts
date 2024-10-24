import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DetRegFisComponent } from './det-reg-fis/det-reg-fis.component';
import { DetRegimenRoutingModule } from './det-regimen-routing.module';
import { FormsModule } from '@angular/forms';
import { InfoRegComponent } from './info-reg/info-reg.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SafeUrlPipe } from './safe-url.pipe'; // Importar el Pipe



@NgModule({
  declarations: [
    DetRegFisComponent,
    InfoRegComponent,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    DetRegimenRoutingModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule, 
    MatButtonModule
  ]
})
export class DetRegimenModule { }
