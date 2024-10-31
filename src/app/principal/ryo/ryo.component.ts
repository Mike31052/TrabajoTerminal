import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ryo',
  templateUrl: './ryo.component.html',
  styleUrls: ['./ryo.component.css'] // Asegúrate de que sea 'styleUrls'
})
export class RyoComponent {
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
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
