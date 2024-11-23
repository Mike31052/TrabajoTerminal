import { Component, Input } from '@angular/core';
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';
import { EXENCIONES } from '../../shared/models/constantes.model';
declare var bootstrap: any;

@Component({
  selector: 'app-add-ingreso-sueldo',
  templateUrl: './add-ingreso-sueldo.component.html',
  styleUrls: ['./add-ingreso-sueldo.component.css']
})
export class AddIngresoSueldoComponent {

  @Input() ingreso!: IngresosAsalariado;
  activeSection: string = '';
  //Ingresos exentos
  exentoAguinaldo: number = 0;
  exentoPrimaVacacional: number = 0;
  exentoPTU: number = 0;
  exentoPrimaDominical: number = 0;
  otrosIngresosExentos: number = 0;
  //Ingresos gravables
  gravableAguinaldo: number = 0;
  gravablePrimaVacacional: number = 0;
  gravablePTU: number = 0;
  gravablePrimaDominical: number = 0;
  otrosIngresosGravables: number = 0;

  ngOnInit() {
    this.ingreso.ingresoAnual = this.ingreso.ingresoAnual ?? 0;
    this.ingreso.ingresoExento = this.ingreso.ingresoExento ?? 0;
    this.ingreso.retencionISR = this.ingreso.retencionISR ?? 0;
    this.ingreso.subsidioEmpleo = this.ingreso.subsidioEmpleo ?? 0;
    this.ingreso.aguinaldo = this.ingreso.aguinaldo ?? 0;
    this.ingreso.primaVacacional = this.ingreso.primaVacacional ?? 0;
    this.ingreso.primaDominical = this.ingreso.primaDominical ?? 0;
    this.ingreso.ptu = this.ingreso.ptu ?? 0;
    this.ingreso.otrosIngresos = this.ingreso.otrosIngresos ?? 0;
  }

  ngAfterViewInit() {
    const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
      new bootstrap.Popover(popoverTriggerEl);
    });
  }

  toggleCollapse(sectionId: string) {
    this.activeSection = this.activeSection === sectionId ? '' : sectionId;
  }

  validarCampos(): boolean {
    if (!this.ingreso || !this.ingreso.ingresoAnual || !this.ingreso.retencionISR) {
      return false;
    }
    return true;
  }

  calcularIngresos() {
    this.ingreso.ingresoExento = 0;
    this.ingreso.ingresoGravable = 0;
    this.calcularIngresoExento();
    this.calcularIngresoGravable();
  }

  calcularIngresoExento() {

    if(this.ingreso.aguinaldo){
      this.exentoAguinaldo = Math.min(this.ingreso.aguinaldo, EXENCIONES.AGUINALDO * EXENCIONES.UMA_VALUE);
    }
    if(this.ingreso.primaVacacional){
      this.exentoPrimaVacacional = Math.min(this.ingreso.primaVacacional, EXENCIONES.PRIMA_VACACIONAL * EXENCIONES.UMA_VALUE);
    }
    if(this.ingreso.ptu){
      this.exentoPTU = Math.min(this.ingreso.ptu, EXENCIONES.PTU * EXENCIONES.UMA_VALUE);
    }
    if(this.ingreso.primaDominical){
      this.exentoPrimaDominical = Math.min(this.ingreso.primaDominical, EXENCIONES.PRIMA_DOMINICAL * EXENCIONES.UMA_VALUE);
    }
    if(this.ingreso.otrosIngresos){
      this.otrosIngresosExentos = this.ingreso.otrosIngresos;
    }
    
    // Suma de ingresos exentos
    this.ingreso.ingresoExento = 
      this.exentoAguinaldo +
      this.exentoPrimaVacacional +
      this.exentoPTU +
      this.exentoPrimaDominical +
      this.otrosIngresosExentos;
  }

  calcularIngresoGravable() {
    // Cálculo de ingreso gravable por concepto
    if (this.ingreso.aguinaldo) {
      this.gravableAguinaldo = this.ingreso.aguinaldo - this.exentoAguinaldo;
    }
    if (this.ingreso.primaVacacional) {
      this.gravablePrimaVacacional = this.ingreso.primaVacacional - this.exentoPrimaVacacional;
    }
    if (this.ingreso.ptu) {
      this.gravablePTU = this.ingreso.ptu - this.exentoPTU;
    }
    if (this.ingreso.primaDominical) {
      this.gravablePrimaDominical = this.ingreso.primaDominical - this.exentoPrimaDominical;
    }
    if (this.ingreso.otrosIngresos) {
      this.otrosIngresosGravables = this.ingreso.otrosIngresos - this.otrosIngresosExentos;
    }
  
    // Asegurarnos de que ningún valor gravable sea negativo
    this.gravableAguinaldo = Math.max(this.gravableAguinaldo, 0);
    this.gravablePrimaVacacional = Math.max(this.gravablePrimaVacacional, 0);
    this.gravablePTU = Math.max(this.gravablePTU, 0);
    this.gravablePrimaDominical = Math.max(this.gravablePrimaDominical, 0);
    this.otrosIngresosGravables = Math.max(this.otrosIngresosGravables, 0);
  
    // Suma total del ingreso gravable
    this.ingreso.ingresoGravable = 
      this.gravableAguinaldo +
      this.gravablePrimaVacacional +
      this.gravablePTU +
      this.gravablePrimaDominical +
      this.otrosIngresosGravables;
  }
  
}
