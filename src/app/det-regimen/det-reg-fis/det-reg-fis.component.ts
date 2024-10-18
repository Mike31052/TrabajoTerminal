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
        this.contenido = 'Este régimen es una simplificación administrativa diseñada para facilitar el pago de impuestos a personas físicas con ingresos anuales menores a 3.5 millones de pesos. Está dirigido a aquellos que desarrollan actividades empresariales, profesionales, o que obtienen ingresos del arrendamiento de bienes inmuebles y actividades del sector primario como la agricultura, ganadería, pesca o silvicultura.';
        break;
      case 'sueldos':
        this.contenido = 'Este régimen está diseñado para personas que reciben ingresos a través de un contrato laboral formal. Estos ingresos se derivan de una relación de trabajo subordinada entre un trabajador y un empleador. El empleador asigna tareas específicas al trabajador, le paga periódicamente y, en algunos casos, proporciona beneficios adicionales, como seguros y prestaciones sociales.';
        break;
      case 'plataformas':
        this.contenido = 'Este régimen aplica a personas físicas que generan ingresos a través de la venta de bienes o la prestación de servicios mediante plataformas tecnológicas como aplicaciones móviles o sitios web. Se implementó con el objetivo de regular a quienes generan ingresos mediante plataformas como Uber, Airbnb, o ventas en línea.';
        break;
      case 'empresarial':
        this.contenido = 'Este régimen está dirigido a personas físicas que realizan actividades empresariales o profesionales, como comerciantes, artesanos, abogados, o médicos. No existe un límite de ingresos, y los contribuyentes pueden deducir gastos relacionados con la actividad que realicen, lo que puede reducir el monto de impuestos a pagar.';
        break; 
      case 'premio':
        this.contenido = 'Este régimen está dirigido a personas físicas que reciben ingresos por la obtención de premios en concursos, rifas, sorteos o cualquier otra actividad que implique una ganancia de esta naturaleza. El impuesto aplicable es retenido por quien otorga el premio, y en caso de superar los 600,000 pesos, se aplican impuestos adicionales.';
        break;
      default:
        this.contenido = '';
    }
  }

}
