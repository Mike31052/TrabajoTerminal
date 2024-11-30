import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensual-isr-pago',
  templateUrl: './mensual-isr-pago.component.html',
  styleUrl: './mensual-isr-pago.component.css'
})
export class MensualIsrPagoComponent {
  aCargo: number = 0;
  totalContribuciones: number = 0;
  compensaciones: number = 0;
  cantidadACargo: number = 0;
  cantidadAPagar: number = 0;

  actualizarValores() {
    this.totalContribuciones = this.aCargo;
    this.cantidadACargo = this.totalContribuciones - this.compensaciones;
    this.cantidadAPagar = this.cantidadACargo;
  }

  //Para los modales

  
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
