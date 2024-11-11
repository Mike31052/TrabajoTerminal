import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';

@Component({
  selector: 'app-add-ingreso',
  templateUrl: './add-ingreso.component.html',
  styleUrl: './add-ingreso.component.css'
})
export class AddIngresoComponent {

  ingreso: IngresosAsalariado = {};

  constructor(
    public dialogRef: MatDialogRef<AddIngresoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { ingreso: IngresosAsalariado }
  ) {
    if (data && data.ingreso) {
      this.ingreso = data.ingreso;
    } else {
      this.ingreso = {}; // Asignar un objeto vacío si no se pasa 'ingreso'
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Cierra el modal sin pasar datos
  }

  onConfirm(): void {
    // Aquí puedes pasar datos de regreso, por ejemplo, un objeto con los valores ingresados
    this.dialogRef.close({ confirmed: true });
  }
}
