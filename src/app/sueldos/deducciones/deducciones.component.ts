import { Component } from '@angular/core';

@Component({
  selector: 'app-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.css']
})
export class DeduccionesComponent {
  montoPorDeducir: number = 310;

  deducciones = [
    { title: 'Honorarios médicos, dentales y gastos hospitalarios', iconClass: 'fas fa-stethoscope', count: 2, data: [] },
    { title: 'Gastos médicos por incapacidad o discapacidad', iconClass: 'fas fa-wheelchair', count: 0, data: [] },
    { title: 'Gastos funerales', iconClass: 'fas fa-cross', count: 0, data: [] },
    { title: 'Donativos', iconClass: 'fas fa-hand-holding-heart', count: 12, data: [] },
    { title: 'Intereses reales', iconClass: 'fas fa-percentage', count: 0, data: [] },
    { title: 'Aportaciones voluntarias y planes personales de retiro', iconClass: 'fas fa-piggy-bank', count: 2, data: [] },
    { title: 'Primas por seguros de gastos médicos', iconClass: 'fas fa-file-medical', count: 0, data: [] },
    { title: 'Transportación escolar', iconClass: 'fas fa-bus', count: 15, data: [] },
    { title: 'Depósitos en cuentas especiales para el ahorro', iconClass: 'fas fa-university', count: 0, data: [] },
    { title: 'Colegios', iconClass: 'fas fa-school', count: 36, data: [] },
    { title: 'Deducciones personales eliminadas', iconClass: 'fas fa-trash-alt', count: 0, data: [] }
  ];

  selectedDeduccion: any = null;

  selectDeduccion(deduccion: any) {
    this.selectedDeduccion = deduccion;
    // Aquí puedes cargar datos específicos de la deducción si están disponibles
  }
}
