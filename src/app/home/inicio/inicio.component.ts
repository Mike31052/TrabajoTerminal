import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la redirección



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(
    private router: Router
  ) { }

  goToEfirma(){
    this.router.navigate(['/Efirma']);
  }

  goToRyo(){
    this.router.navigate(['/RyO']);
  }

  goToBuzon(){
    this.router.navigate(['/Buzon']);
  }

  goToListado(){
    this.router.navigate(['/Listado']);
  }
}
