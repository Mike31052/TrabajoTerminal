import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/models/usuario.model';
import { UserSesionService } from '../../core/services/user-sesion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  modalImage: string = '';
  modalCaption: string = '';

  constructor(private router: Router
  ) {}


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

  goTobrfc() {
    this.router.navigate(['/brfc']);
  }

  goTobefirma() {
    this.router.navigate(['/befirma']);
  }


  goTobiva() {
    this.router.navigate(['/biva']);
  }

  goTobeyp() {
    this.router.navigate(['/beyp']);
  }


  goTobisr() {
    this.router.navigate(['/bisr']);
  }



  goTobpremios() {
    this.router.navigate(['/bpremios']);
  }



  goTobresico() {
    this.router.navigate(['/bresico']);
  }



  goTobsalarios() {
    this.router.navigate(['/bsalarios']);
  }




  goTobtecnologicas() {
    this.router.navigate(['/btecnologicas']);
  }

  goTointeres() {
    this.router.navigate(['/interes']);
  }

}
