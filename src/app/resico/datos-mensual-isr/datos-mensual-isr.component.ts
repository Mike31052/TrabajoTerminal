import { Component } from '@angular/core';
import { MensualIsrTransferService } from '../../shared/mensual-isr-transfer/mensual-isr-transfer.service';

@Component({
  selector: 'app-datos-mensual-isr',
  templateUrl: './datos-mensual-isr.component.html',
  styleUrl: './datos-mensual-isr.component.css'
})
export class DatosMensualIsrComponent {
  cantidadAPagar: number = 0;
  isrRetenido: number = 0;

  constructor(private transferService: MensualIsrTransferService) {}

  ngOnInit(): void {
    // Escuchar el valor de "Cantidad a pagar"
    this.transferService.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagar = value;
    });

    // Escuchar el valor de "ISR retenido por personas morales"
    this.transferService.isrRetenido$.subscribe((value) => {
      this.isrRetenido = value;
    });
  }

}
