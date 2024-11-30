import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensual-isr-det',
  templateUrl: './mensual-isr-det.component.html',
  styleUrl: './mensual-isr-det.component.css'
})
export class MensualIsrDetComponent {
  totalIngresos: number = 0;
  baseGravable: number = 0;
  tasaAplicable: number = 0;
  impuestoMensual: number = 0;
  isrRetenido: number = 0;
  impuestoACargo: number = 0;

  // Método para calcular los valores
  onTotalIngresosChange(): void {
    this.baseGravable = this.totalIngresos;

    // Asignar la tasa aplicable según la tabla
    if (this.baseGravable <= 25000) {
      this.tasaAplicable = 1.00;
    } else if (this.baseGravable <= 50000) {
      this.tasaAplicable = 1.10;
    } else if (this.baseGravable <= 83333.33) {
      this.tasaAplicable = 1.50;
    } else if (this.baseGravable <= 208333.33) {
      this.tasaAplicable = 2.00;
    } else if (this.baseGravable <= 291666.66) {
      this.tasaAplicable = 2.50;
    } else {
      this.tasaAplicable = 0; // Por defecto, 0 si no está en rango
    }

    // Calcular impuesto mensual y a cargo
    this.impuestoMensual = (this.baseGravable * this.tasaAplicable) / 100;
    this.impuestoACargo = this.impuestoMensual - this.isrRetenido;
  }

  // Método para actualizar ISR retenido
  onIsrRetenidoChange(): void {
    this.impuestoACargo = this.impuestoMensual - this.isrRetenido;
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
