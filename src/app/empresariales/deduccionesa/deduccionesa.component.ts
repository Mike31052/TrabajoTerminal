// deduccionesa.component.ts
import { Component } from '@angular/core';
import { Deducciones2Service } from '../services/deducciones2.service';
@Component({
  selector: 'app-deduccionesa',
  templateUrl: './deduccionesa.component.html',
  styleUrls: ['./deduccionesa.component.css']
})
export class DeduccionesaComponent {

  constructor(private deduccionesService: Deducciones2Service) { }

  actualizarMontoPorDeduciranual() {
    const monto = parseFloat((<HTMLInputElement>document.getElementById('montoPorDeduciranual')).value);
    this.deduccionesService.setMontoTotalPorDeducir(monto);
  }
}
