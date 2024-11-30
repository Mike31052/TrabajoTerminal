import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensual-iva-pago',
  templateUrl: './mensual-iva-pago.component.html',
  styleUrl: './mensual-iva-pago.component.css'
})
export class MensualIvaPagoComponent {
  aCargo: number = 0;
  totalContribuciones: number = 0;
  compensaciones: number = 0;
  estimulos: number = 0;
  cantidadACargo: number = 0;
  cantidadAPagar: number = 0;

  actualizarValores(): void {
    this.totalContribuciones = this.aCargo;
    const subtotal = this.totalContribuciones - this.compensaciones - this.estimulos;
    this.cantidadACargo = subtotal;
    this.cantidadAPagar = subtotal;
  }

  //Para el modal
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

}
