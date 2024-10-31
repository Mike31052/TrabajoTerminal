import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  constructor(
    private router: Router
  ) { }

  goToVerificaciones() {
    this.router.navigate(['/Verificaciones']);
  }
}
