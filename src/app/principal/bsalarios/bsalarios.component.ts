import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bsalarios',
  
  templateUrl: './bsalarios.component.html',
  styleUrl: './bsalarios.component.css'
})
export class BsalariosComponent {

  modalImage: string = '';
  modalCaption: string = '';

  constructor(
    private router: Router
  ) { }

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
