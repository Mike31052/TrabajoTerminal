import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MensualIvaTransferService } from '../../shared/mensual-iva-transfer/mensual-iva-transfer.service';

@Component({
  selector: 'app-mensual-iva-det',
  templateUrl: './mensual-iva-det.component.html',
  styleUrl: './mensual-iva-det.component.css'
})
export class MensualIvaDetComponent {
  ingresos16: number = 0;
  ivaCargo16: number = 0;
  totalIvaCargo: number = 0;
  ivaNoCobrado: number = 0;
  ivaRetenido: number = 0;
  ivaAcreditable: number = 0;
  cantidadCargo: number = 0;
  saldoFavor: number = 0;
  impuestoCargo: number = 0;

  calcularIVA(): void {
    // Calcula IVA a cargo a la tasa del 16% y Total de IVA a cargo
    this.ivaCargo16 = this.ingresos16 * 0.16;
    this.totalIvaCargo = this.ivaCargo16;

    // Calcula Cantidad a cargo
    this.cantidadCargo =
      this.totalIvaCargo -
      this.ivaNoCobrado -
      this.ivaRetenido -
      this.ivaAcreditable;

    // Calcula Impuesto a cargo
    this.impuestoCargo = this.cantidadCargo - this.saldoFavor;

    // Actualiza el valor en el servicio
    this.transferService.updateImpuestoCargo(this.impuestoCargo);
  }


  //Para el modal
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(
    private dialog: MatDialog,
    private transferService: MensualIvaTransferService
  ) {}

  openModal(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }


  //para transferir
}
