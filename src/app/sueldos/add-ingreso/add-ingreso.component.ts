import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-add-ingreso',
  standalone: true,
  imports: [],
  templateUrl: './add-ingreso.component.html',
  styleUrl: './add-ingreso.component.css'
})
export class AddIngresoComponent {

  constructor(
    public dialogRef: MatDialogRef<AddIngresoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userTO: Usuario }
  ) {}

  onCancel(): void {
    this.dialogRef.close(); // Cierra el modal sin pasar datos
  }

  onConfirm(): void {
    // Aquí puedes pasar datos de regreso, por ejemplo, un objeto con los valores ingresados
    this.dialogRef.close({ confirmed: true });
  }
}
