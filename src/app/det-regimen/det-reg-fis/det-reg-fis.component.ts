import { Component } from '@angular/core';


@Component({
  selector: 'app-det-reg-fis',
  templateUrl: './det-reg-fis.component.html',
  styleUrl: './det-reg-fis.component.css'
})
export class DetRegFisComponent {

  titulo:string = '';
  contenido:string = '';
  selectedOption:string = '';

  mostrarMensaje(){
    switch (this.selectedOption) { 
      case 'confianza':
        this.contenido = 'Has seleccionado la Opción 1';
        break;
      case 'sueldos':
        this.contenido = 'Has seleccionado la Opción 2';
        break;
      case 'plataformas':
        this.contenido = 'Has seleccionado la Opción 3';
        break;
      case 'empresarial':
        this.contenido = 'Has seleccionado la Opción 4';
        break; 
      case 'premio':
        this.contenido = 'Has seleccionado la Opción 5';
        break;
      default:
        this.contenido = '';
    }
  }

}
