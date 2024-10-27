import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component'; // Ajusta la ruta según sea necesario
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingresoAnual: number = 0;
  ingresosExentos: number = 0;
  ingresosAcumulables: number = 0;
  impuestoRetenido: number = 0;
  ingresos?: IngresosAsalariado [];

  constructor(private dialog: MatDialog) {}

  agregarIngreso() {
    this.ingresos?.push({
      rfc: 'Nuevo RFC',
      empresa: 'Nuevo Nombre',
      ingresoAnual: this.ingresoAnual,
      ingresoExento: this.ingresosExentos,
      subsidioEmpleo: 0,
      retencionISR: this.impuestoRetenido
    });
  }

  validarIngreso(ingreso: any) {
    alert('Validando ingreso de ' + ingreso.nombre);
  }

  eliminarIngreso(ingreso: any) {
    this.ingresos = this.ingresos?.filter(i => i !== ingreso);
  }

  openDialog(message: string): void {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }
}
