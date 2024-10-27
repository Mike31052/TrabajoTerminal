import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la redirección





@Component({
  selector: 'app-verificaciones',
  standalone: true,
  imports: [],
  templateUrl: './verificaciones.component.html',
  styleUrl: './verificaciones.component.css'
})
export class VerificacionesComponent {

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


