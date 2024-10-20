import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.css']
})
export class BuzonComponent {
  constructor(private router: Router) { }

  goToInicio() {
    this.router.navigate(['/Inicio']);
  }
}
