import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la redirección

@Component({
  selector: 'app-verificaciones',
  templateUrl: './verificaciones.component.html',
  styleUrls: ['./verificaciones.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class VerificacionesComponent {

  constructor(
    private router: Router
  ) { }

  goToEfirma() {
    this.router.navigate(['/Efirma']);
  }

  goToRyo() {
    this.router.navigate(['/RyO']);
  }

  goToBuzon() {
    this.router.navigate(['/Buzon']);
  }

  goToListado() {
    this.router.navigate(['/Listado']);
  }
}
