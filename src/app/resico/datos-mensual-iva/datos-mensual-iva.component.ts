import { Component, OnInit } from '@angular/core';
import { MensualIvaTransferService } from '../../shared/mensual-iva-transfer/mensual-iva-transfer.service';

@Component({
  selector: 'app-datos-mensual-iva',
  templateUrl: './datos-mensual-iva.component.html',
  styleUrl: './datos-mensual-iva.component.css'
})
export class DatosMensualIvaComponent implements OnInit {
  cantidadAPagar: number = 0;

  constructor(private transferService: MensualIvaTransferService) {}

  ngOnInit(): void {
    // Escuchar el valor de "Cantidad a pagar"
    this.transferService.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagar = value;
    });
  }
}
