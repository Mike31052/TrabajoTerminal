import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BuzonComponent } from './buzon/buzon.component';
import { EfirmaComponent } from './efirma/efirma.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { RyoComponent } from './ryo/ryo.component';
import { VerificacionesComponent } from './verificaciones/verificaciones.component';




@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    VerificacionesComponent,
    EfirmaComponent,
    ListadoComponent,
    RyoComponent,
    BuzonComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule, 
    MatButtonModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent
  ]
})
export class PrincipalModule { }
