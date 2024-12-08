import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MensualIvaTransferService } from '../../shared/mensual-iva-transfer/mensual-iva-transfer.service';

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
    this.transferService.updateCantidadAPagar(this.cantidadAPagar);
  }

  //Para el modal
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog, private transferService: MensualIvaTransferService) {}

  openModal(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    // Emitir el valor inicial si ya está calculado
    this.transferService.updateCantidadAPagar(this.cantidadAPagar);
    // Suscripción al servicio para obtener el valor actualizado
    this.transferService.impuestoCargo$.subscribe((value) => {
      this.aCargo = value;
    });
  }
}
