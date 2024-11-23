import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeduccionesAsalariado } from '../../shared/models/deducciones-sueldos.model';
import { TipoDeduccion } from '../../shared/models/tipo-deduccion.enum';

@Component({
  selector: 'app-add-deduccion',
  templateUrl: './add-deduccion.component.html',
  styleUrls: ['./add-deduccion.component.css']
})
export class AddDeduccionComponent {
  tipoDeduccion: number;  // Cambia el tipo a number
  descripcion: string = '';
  rfcEmisor: string = '';
  importeTotal: number = 0;
  nombreRazonSocial: string = '';
  montoDeducible: number = 0;
  fechaEmision: string = '';
  cantidadRecuperada: number = 0;
  formaPago: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddDeduccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tipoDeduccion: number }  // Cambia el tipo a number
  ) {
    this.tipoDeduccion = data.tipoDeduccion;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getTipoDeduccionTexto(tipo: number): string {
    return TipoDeduccion[tipo] || 'Tipo de deducción desconocido';
  }

  onSave(): void {
    const nuevaDeduccion: DeduccionesAsalariado = {
      tipo_deduccion: this.tipoDeduccion,
      descripcion: this.descripcion,
      rfc_emisor: this.rfcEmisor,
      importe: this.importeTotal,
      empresa: this.nombreRazonSocial,
      deducible: this.montoDeducible,
      fecha_emision: new Date(this.fechaEmision),
    };

    this.dialogRef.close(nuevaDeduccion);
  }
}
