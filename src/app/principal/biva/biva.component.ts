import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biva',
  
  templateUrl: './biva.component.html',
  styleUrl: './biva.component.css'
})
export class BivaComponent {

  modalImage: string = '';
  modalCaption: string = '';

  constructor(
    private router: Router
  ) { }

  goToInicio() {
    this.router.navigate(['/Inicio']);
  }

}
