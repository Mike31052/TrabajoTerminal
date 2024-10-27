import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { EfirmaComponent } from './efirma/efirma.component';
import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InicioComponent,
    EfirmaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, // Esto está correcto
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule, 
    MatButtonModule
  ]
})
export class HomeModule { }
