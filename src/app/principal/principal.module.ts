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


import { BefirmaComponent } from './befirma/befirma.component';
import { BeypComponent } from './beyp/beyp.component';
import { BisrComponent } from './bisr/bisr.component';
import { BivaComponent } from './biva/biva.component';
import { BpremiosComponent } from './bpremios/bpremios.component';
import { BresicoComponent } from './bresico/bresico.component';
import { BrfcComponent } from './brfc/brfc.component';
import { BsalariosComponent } from './bsalarios/bsalarios.component';
import { BtecnologicasComponent } from './btecnologicas/btecnologicas.component';
import { BodyComponent } from './body/body.component';




@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    VerificacionesComponent,
    EfirmaComponent,
    ListadoComponent,
    RyoComponent,
    BuzonComponent,
    BrfcComponent,
    BeypComponent,
    BisrComponent,
    BivaComponent,
    BpremiosComponent,
    BresicoComponent,
    BsalariosComponent,
    BtecnologicasComponent,
    BefirmaComponent

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
    FooterComponent,
    BodyComponent
  ]
})
export class PrincipalModule { }
