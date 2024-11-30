import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-anual-pago',
  templateUrl: './anual-pago.component.html',
  styleUrl: './anual-pago.component.css'
})
export class AnualPagoComponent {
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog) {}

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
  }

}
