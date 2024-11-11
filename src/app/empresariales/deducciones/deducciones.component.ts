import { Component } from '@angular/core';
import { DeduccionesService } from '../services/deducciones.service';

@Component({
  selector: 'app-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.css']
})
export class DeduccionesComponent {

  constructor(private deduccionesService: DeduccionesService) { }

  actualizarMontoPorDeducir() {
    const monto = parseFloat((<HTMLInputElement>document.getElementById('montoPorDeducir')).value);
    this.deduccionesService.setMontoTotalPorDeducir(monto);
  }
}
