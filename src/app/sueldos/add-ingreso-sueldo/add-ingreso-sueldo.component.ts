import { Component, Input } from '@angular/core';
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';

@Component({
  selector: 'app-add-ingreso-sueldo',
  templateUrl: './add-ingreso-sueldo.component.html',
  styleUrls: ['./add-ingreso-sueldo.component.css']
})
export class AddIngresoSueldoComponent {

  @Input() ingreso!: IngresosAsalariado;
  activeSection: string = '';

  ngOnInit() {
    this.ingreso.ingresoAnual = this.ingreso.ingresoAnual ?? 0;
    this.ingreso.ingresoExento = this.ingreso.ingresoExento ?? 0;
    this.ingreso.retencionISR = this.ingreso.retencionISR ?? 0;
  }

  toggleCollapse(sectionId: string) {
    this.activeSection = this.activeSection === sectionId ? '' : sectionId;
  }
}
