import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrl: './interes.component.css'
})
export class InteresComponent {

  constructor(
    private router: Router
  ) { }

  goToInicio() {
    this.router.navigate(['/Inicio']);
  }

}
