import { Component, OnInit } from '@angular/core';
import { MensualIsrTransferService } from '../../shared/mensual-isr-transfer/mensual-isr-transfer.service';
import { MensualIvaTransferService } from '../../shared/mensual-iva-transfer/mensual-iva-transfer.service';

@Component({
  selector: 'app-datos-mensual-isr',
  templateUrl: './datos-mensual-isr.component.html',
  styleUrl: './datos-mensual-isr.component.css'
})
export class DatosMensualIsrComponent implements OnInit{
  cantidadAPagar: number = 0;
  isrRetenido: number = 0;
  cantidadAPagarIVA: number = 0;

  constructor(private transferServiceISR: MensualIsrTransferService,
              private transferServiceIVA: MensualIvaTransferService
  ) {}

  ngOnInit(): void {
    // Escuchar el valor de "Cantidad a pagar"
    this.transferServiceISR.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagar = value;
    });

    // Escuchar el valor de "ISR retenido por personas morales"
    this.transferServiceISR.isrRetenido$.subscribe((value) => {
      this.isrRetenido = value;
    });

    // Escuchar el valor de "Cantidad a pagar iva"
    this.transferServiceIVA.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagarIVA = value;
    });
  }

}
