import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    FooterComponent
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
