
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
    'https://www.youtube.com/embed/Z6FR5j0zAvQ?si=IMAsWQ8UbqwPNqn3',
    'https://www.youtube.com/embed/FsKRT_9zkL4?si=O4zuWCyhc5aMdG54',
    'https://www.youtube.com/embed/1GEtu6KWAlc?si=VkIJPEMJAMRH8nVy',
    'https://www.youtube.com/embed/0o7cLU0GLs8?si=IVBb4scPF6SmH3qH',
    'https://www.youtube.com/embed/IqyBPeBKAX0?si=hRCckup9hh0yupgv'
  ];

  // Títulos específicos para cada video
  videoTitles: string[] = [
    'Estás viendo el video sobre el Régimen simplificado de confianza (RESICO)',
    'Estás viendo el video sobre el Régimen Sueldos y salarios e ingresos asimilados a salarios',
    'Estás viendo el video sobre el Régimen de actividades empresariales con ingresos a través de plataformas tecnológicas',
    'Estás viendo el video sobre el Régimen de Actividad Empresarial y Profesional',
    'Estás viendo el video sobre el Régimen de los Ingresos por la obtención de premios'
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
}
