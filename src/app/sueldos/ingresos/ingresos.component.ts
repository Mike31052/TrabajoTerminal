import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component'; // Ajusta la ruta según sea necesario
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';
import { Usuario } from '../../shared/models/usuario.model';
import { AddIngresoComponent } from '../add-ingreso/add-ingreso.component';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingresoAnual?: number = 0;
  ingresosExentos?: number = 0;
  ingresosAcumulables?: number = 0;
  impuestoRetenido?: number = 0;
  ingresos: IngresosAsalariado [] = [];
  userTO?: Usuario;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (!this.ingresos || this.ingresos.length === 0) {
      // Inicializar la primera posición con un objeto de tipo 'IngresosAsalariado'
      this.ingresos = [{
        id_usuario: '12345',       
        rfc: 'ABC123456789',      
        empresa: 'Empresa X',     
        ingresoAnual: 100000,     
        ingresoExento: 5000,      
        subsidioEmpleo: 2000,     
        retencionISR: 1500        
      }];
    }

    this.ingresoAnual = this.ingresos[this.ingresos.length - 1].ingresoAnual;
    this.ingresosExentos = this.ingresos[this.ingresos.length - 1].ingresoExento;
    this.ingresosAcumulables = 0;
    this.impuestoRetenido = this.ingresos[this.ingresos.length - 1].retencionISR;
  }

  agregarIngreso() {
    const dialogRef = this.dialog.open(AddIngresoComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Monto ingresado:', result);
        // Aquí puedes manejar el resultado, como guardar el ingreso
      }
    });
  }


  validarIngreso(ingreso: IngresosAsalariado) {
    const dialogRef = this.dialog.open(AddIngresoComponent, {
      data: { ingreso: ingreso }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Monto ingresado:', result);
      }
    });
  }

  eliminarIngreso(ingreso: any) {
    this.ingresos = this.ingresos?.filter(i => i !== ingreso);
    if (this.ingresos?.length > 0) {
      // Asigna los valores de la última entrada del arreglo
      this.ingresoAnual = this.ingresos[this.ingresos.length - 1].ingresoAnual;
      this.ingresosExentos = this.ingresos[this.ingresos.length - 1].ingresoExento;
      this.impuestoRetenido = this.ingresos[this.ingresos.length - 1].retencionISR;
    } else {
      // Si el arreglo está vacío, asigna valores por defecto
      this.ingresoAnual = 0;
      this.ingresosExentos = 0;
      this.impuestoRetenido = 0;
    }
  }

  openDialog(message: string): void {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }
}
