import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-efirma',
  templateUrl: './efirma.component.html',
  styleUrls: ['./efirma.component.css'] // Asegúrate de que sea 'styleUrls'
})
export class EfirmaComponent {
  modalImage: string = '';
  modalCaption: string = '';

  constructor(private router: Router) {}

  goToInicio() {
    this.router.navigate(['/Inicio']);
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
