import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensual-isr-ingresos',
  templateUrl: './mensual-isr-ingresos.component.html',
  styleUrl: './mensual-isr-ingresos.component.css'
})
export class MensualISRIngresosComponent {
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

  //Operaciones


  totalIngresosCobrados: number = 0;
  descuentosDevoluciones: number = 0;
  ingresosADisminuir: number = 0;
  ingresosAdicionales: number = 0;
  totalIngresosPercibidos: number = 0;

  calcularTotalIngresos(): void {
    this.totalIngresosPercibidos = this.totalIngresosCobrados 
      - this.descuentosDevoluciones 
      - this.ingresosADisminuir 
      + this.ingresosAdicionales;
  }

}
