import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetRegFisComponent } from './det-reg-fis/det-reg-fis.component';
import { DetRegimenRoutingModule } from './det-regimen-routing.module';
import { InfoRegComponent } from './info-reg/info-reg.component';
import { SafeUrlPipe } from './safe-url.pipe'; // Importar el Pipe

import { MatMenuModule } from '@angular/material/menu';
import { UserHttpService } from '../core/services/user-http-service.service';
import { HttpClientModule } from '@angular/common/http';



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
    MatMenuModule,
    MatToolbarModule, 
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    UserHttpService
  ]
})
export class DetRegimenModule { }
