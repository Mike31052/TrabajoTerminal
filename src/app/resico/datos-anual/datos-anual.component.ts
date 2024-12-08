import { Component, OnInit } from '@angular/core';
import { AnualTransferService } from '../../shared/anual-transfer/anual-transfer.service';

@Component({
  selector: 'app-datos-anual',
  templateUrl: './datos-anual.component.html',
  styleUrl: './datos-anual.component.css'
})
export class DatosAnualComponent implements OnInit {
  cantidadAPagar: number = 0;

  constructor(private transferService: AnualTransferService) {}

  ngOnInit(): void {
    // Escuchar el valor de "Cantidad a pagar"
    this.transferService.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagar = value;
    });
  }

}
