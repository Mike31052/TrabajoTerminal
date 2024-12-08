import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MensualIsrTransferService } from '../../shared/mensual-isr-transfer/mensual-isr-transfer.service';

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

    // Actualizar el valor en el servicio
    this.transferService.updateCantidadAPagar(this.cantidadAPagar);
  }

  //Para los modales

  
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog, private transferService: MensualIsrTransferService) {}

  openModal(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    // Escuchar el valor de "Impuesto a cargo"
    this.transferService.impuestoCargo$.subscribe((value) => {
      this.aCargo = value;
      this.actualizarValores();
    });
  }

}
