
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-reg',
  templateUrl: './info-reg.component.html',
  styleUrls: ['./info-reg.component.css']
})
export class InfoRegComponent {
  showModal = false;
  modalTitle = '';
  videoSrc = '';
  videoNumber: number = 0;

  // URLs de videos de YouTube usando el formato de incrustación
  videoPaths: string[] = [
    'https://www.youtube.com/embed/Dr3TxFQlT9Y?si=_Qt8lnX-PDPkpDBs&amp;controls=0',
    'https://www.youtube.com/embed/PXUrAiKl4Bs?si=rZZK9gE1Ut6LYOfi',
    'https://www.youtube.com/embed/jg3jeQ299JU?si=DJuf4rLoC5FQXrHP',
    'https://www.youtube.com/embed/ql7r0MhWLXw?si=_I5ifz-WRGpSq9gw',
    'https://www.youtube.com/embed/HeiyxokbjqU?si=Rvti_b2zzH3YIZa8'
  ];

  openModal(videoNumber: number) {
    this.showModal = true;
    this.videoNumber = videoNumber; // Asignar el número del video
    this.modalTitle = `Estás viendo el video ${videoNumber}`;
    this.videoSrc = this.videoPaths[videoNumber - 1]; // Obtener la URL del video
  }

  closeModal() {
    this.showModal = false;
  }
  
  onBackdropClick(event: MouseEvent) {
    this.closeModal();
  }
}
