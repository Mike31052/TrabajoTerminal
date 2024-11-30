import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-anual-ingresos',
  templateUrl: './anual-ingresos.component.html',
  styleUrl: './anual-ingresos.component.css'
})
export class AnualIngresosComponent {
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
  
//Parte del calculo 

  totalIngresosEfectivamenteCobrados: number = 1490102; // Ejemplo prellenado
  descuentosDevolucionesBonificaciones: number = 0;
  ingresosADisminuir: number = 0;
  ingresosAdicionales: number = 0;
  totalIngresosPercibidos: number = 0;
  ingresosGravados: number = 0;

  calcularTotal() {
    this.totalIngresosPercibidos = this.totalIngresosEfectivamenteCobrados -
      this.descuentosDevolucionesBonificaciones -
      this.ingresosADisminuir +
      this.ingresosAdicionales;

    this.ingresosGravados = this.totalIngresosPercibidos; // Según tu requerimiento
  }

}

 