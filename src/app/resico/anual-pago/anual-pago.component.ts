import { Component, TemplateRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnualTransferService } from '../../shared/anual-transfer/anual-transfer.service';

@Component({
  selector: 'app-anual-pago',
  templateUrl: './anual-pago.component.html',
  styleUrl: './anual-pago.component.css'
})
export class AnualPagoComponent implements OnInit {
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog, private transferService: AnualTransferService) {}

  openModal(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  aCargo: number = 0;
  totalContribuciones: number = 0;
  compensaciones: number = 0;
  cantidadACargo: number = 0;
  cantidadAPagar: number = 0;

  calcularValores(): void {
    
    // Duplica el valor de "A cargo" en "Total de contribuciones"
    this.totalContribuciones = this.aCargo * 1;

    // Resta las compensaciones y actualiza "Cantidad a cargo" y "Cantidad a pagar"
    const resultado = this.totalContribuciones - this.compensaciones;
    this.cantidadACargo = resultado;
    this.cantidadAPagar = resultado;
    // Lógica existente para calcular cantidadAPagar
    this.transferService.updateCantidadAPagar(this.cantidadAPagar);
  }
  ngOnInit(): void {
    // Escuchar el valor de "Impuesto a cargo" desde el servicio
    this.transferService.impuestoACargo$.subscribe((value) => {
      this.aCargo = value;
      this.calcularValores(); // Recalcular valores con el nuevo "aCargo"
    });
    // Emitir el valor inicial si ya está calculado
    this.transferService.updateCantidadAPagar(this.cantidadAPagar);
  }
}
