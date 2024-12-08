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

  showModal = false;
  modalTitle = '';
  videoSrc = '';
  videoNumber: number = 0;

  constructor(private router: Router) {}

   // URLs de videos de YouTube usando el formato de incrustación
   videoPaths: string[] = [
    'https://www.youtube.com/embed/r9y9oxVdmAU'
  ];

  // Títulos específicos para cada video
  videoTitles: string[] = [
    'Estás viendo el video de explicacion del formulario para Regimen con actividad empresarial y profesional'
  ];

  openModal(videoNumber: number) {
    
    this.showModal = true;
    this.videoNumber = videoNumber; // Asignar el número del video
    this.modalTitle = this.videoTitles[videoNumber - 1]; // Asignar el título correspondiente
    this.videoSrc = this.videoPaths[videoNumber - 1]; // Obtener la URL del video
  }

  closeModal() {
    this.showModal = false;
  }

  onBackdropClick(event: MouseEvent) {
    this.closeModal();
  }

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
