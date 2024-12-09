import { Component, OnInit } from '@angular/core';
import { MensualIsrTransferService } from '../../shared/mensual-isr-transfer/mensual-isr-transfer.service';
import { MensualIvaTransferService } from '../../shared/mensual-iva-transfer/mensual-iva-transfer.service';

@Component({
  selector: 'app-escoger-declaracion',
  templateUrl: './escoger-declaracion.component.html',
  styleUrl: './escoger-declaracion.component.css'
})
export class EscogerDeclaracionComponent implements OnInit {
  cantidadAPagarISR: number = 0; // Para "Cantidad a pagar" del ISR
  cantidadAPagarIVA: number = 0; // Para "Cantidad a pagar" del IVA
  isrRetenido: number = 0; // Para "ISR retenido por personas morales"

  constructor(
    private isrTransferService: MensualIsrTransferService,
    private ivaTransferService: MensualIvaTransferService
  ) {}

  ngOnInit(): void {
    // Escuchar el valor de "Cantidad a pagar" para ISR
    this.isrTransferService.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagarISR = value;
    });

    // Escuchar el valor de "ISR retenido por personas morales"
    this.isrTransferService.isrRetenido$.subscribe((value) => {
      this.isrRetenido = value;
    });

    // Escuchar el valor de "Cantidad a pagar" para IVA
    this.ivaTransferService.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagarIVA = value;
    });
  }
}
