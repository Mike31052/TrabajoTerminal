import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bisr',
  
  templateUrl: './bisr.component.html',
  styleUrl: './bisr.component.css'
})
export class BisrComponent {
  
  modalImage: string = '';
  modalCaption: string = '';

  
  constructor(
    private router: Router
  ) { }

  goToInicio() {
    this.router.navigate(['/Inicio']);
  }

}
