import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  modalImage: string = '';
  modalCaption: string = '';

  constructor(private router: Router) {}

  goToVerificaciones() {
    this.router.navigate(['/Verificaciones']);
  }

  openModal(imageSrc: string, caption: string) {
    this.modalImage = imageSrc;
    this.modalCaption = caption;
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.style.display = 'block'; // Mostrar el modal
    }
  }

  closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.style.display = 'none'; // Ocultar el modal
    }
  }
}
