import { NgModule } from '@angular/core';



import { EfirmaComponent } from './efirma/efirma.component';
import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    InicioComponent,
    EfirmaComponent
  ],
  imports: [
    HomeRoutingModule // Esto está correcto
  ]
})
export class HomeModule { }
