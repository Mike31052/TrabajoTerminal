import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component'; // Ajusta la ruta según sea necesario
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';
import { AddIngresoComponent } from '../add-ingreso/add-ingreso.component';
import { Usuario } from '../../shared/models/usuario.model';

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
  userTO?: Usuario;

  constructor(private dialog: MatDialog) {}

  agregarIngreso() {
    const dialogRef = this.dialog.open(AddIngresoComponent, {
      data: { userTO: this.userTO }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Monto ingresado:', result);
        // Aquí puedes manejar el resultado, como guardar el ingreso
      }
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
