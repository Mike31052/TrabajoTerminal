import { Component, Input } from '@angular/core';
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';

@Component({
  selector: 'app-add-ingreso-asimilado',
  templateUrl: './add-ingreso-asimilado.component.html',
  styleUrl: './add-ingreso-asimilado.component.css'
})
export class AddIngresoAsimiladoComponent {

  @Input() ingreso!: IngresosAsalariado;

  ngOnInit() {
    this.ingreso.ingresoAnualas = this.ingreso.ingresoAnualas ?? 0;
    this.ingreso.retencionISRas = this.ingreso.retencionISRas ?? 0;
  }

  validarCampos(): boolean {
    if (!this.ingreso || !this.ingreso.ingresoAnualas || !this.ingreso.retencionISRas) {
      return false;
    }
    return true;
  }

}
