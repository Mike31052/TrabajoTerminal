import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnualTransferService } from '../../shared/anual-transfer/anual-transfer.service';

@Component({
  selector: 'app-anual-det',
  templateUrl: './anual-det.component.html',
  styleUrl: './anual-det.component.css'
})
export class AnualDetComponent {
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog, private transferService: AnualTransferService) {}

  openModal(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  //Para las operaciones
  baseGravable: number = 0;
  tasaAplicable: number = 0;
  isrCausado: number = 0;
  //Esto se debe cambiar para que sea igual al que esta anual-ingresos
  pagosMensuales: number = 30000;
  isrRetenido: number = 0;
  impuestoACargo: number = 0;

  // Tabla de tasas
  tasas: { limite: number; tasa: number }[] = [
    { limite: 300000, tasa: 1.0 },
    { limite: 600000, tasa: 1.1 },
    { limite: 1000000, tasa: 1.5 },
    { limite: 2500000, tasa: 2.0 },
    { limite: 3500000, tasa: 2.5 }
  ];

  calcularISR(): void {
    // Determinar la tasa aplicable
    for (let rango of this.tasas) {
      if (this.baseGravable <= rango.limite) {
        this.tasaAplicable = rango.tasa;
        break;
      }
    }

    // Calcular ISR causado
    this.isrCausado = (this.baseGravable * this.tasaAplicable) / 100;

    // Calcular impuesto a cargo
    this.impuestoACargo = this.isrCausado - this.pagosMensuales - this.isrRetenido;

    // Actualizar el impuesto a cargo en el servicio
    this.transferService.updateImpuestoACargo(this.impuestoACargo);
  }

  ngOnInit(): void {
    // Escuchar el valor de ISR retenido desde el servicio
    this.transferService.isrRetenido$.subscribe((value) => {
      this.isrRetenido = value;
      this.calcularISR(); // Recalcular ISR al cambiar ISR retenido
    });
    // Escuchar el valor de "Ingresos gravados" desde el servicio
    this.transferService.ingresosGravados$.subscribe((value) => {
      this.baseGravable = value; // Actualizar la base gravable
      this.calcularISR(); // Recalcular el ISR
    });
  }

}
