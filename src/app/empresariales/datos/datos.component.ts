import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  tipoDeclaracion: string = '';
  ejercicio: number | null = null;
  periodo: string = '';
  isr: boolean = false;
  iva: boolean = false;

  stepTwo: boolean = false;
  stepThree: boolean = false;

  constructor(private router: Router) {}

  // Función para validar el primer paso
  validateStepOne() {
    if (this.tipoDeclaracion && this.ejercicio && this.periodo) {
      this.stepTwo = true;
    } else {
      alert('Por favor, completa todos los campos obligatorios del primer paso.');
    }
  }

  // Función para validar el segundo paso
  validateStepTwo() {
    if (this.isr && this.iva) {
      this.stepThree = true;
    } else {
      alert('Por favor, selecciona ambos impuestos.');
    }
  }

  // Función para redirigir a la página adecuada según el tipo de declaración
  redirect() {
    if (this.tipoDeclaracion === 'mensual') {
      this.router.navigate(['/empmensual']); // Redirige a la página empmensual
    } else if (this.tipoDeclaracion === 'anual') {
      this.router.navigate(['/empanual']); // Redirige a la página empanual
    } else {
      alert('Selecciona un tipo de declaración válido.');
    }
  }
}
