import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component'; // Ajusta la ruta según sea necesario
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';
import { Usuario } from '../../shared/models/usuario.model';
import { AddIngresoComponent } from '../add-ingreso/add-ingreso.component';
import { SueldosService } from '../../core/services/sueldos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingresoAnual?: number = 0;
  ingresosExentos?: number = 0;
  ingresosGravables?: number = 0;
  ingresosAcumulables?: number = 0;
  impuestoRetenido?: number = 0;
  ingresos: IngresosAsalariado [] = [];
  userTO?: Usuario;

  constructor(private dialog: MatDialog,
    private sueldosService: SueldosService
  ) {}

  ngOnInit() {
    if (!this.ingresos || this.ingresos.length === 0) {
      // Inicializar la primera posición con un objeto de tipo 'IngresosAsalariado'
      this.ingresos = [{
        id_ingreso: 1,
        id_usuario: '12345',       
        rfc: 'ABC123456789',      
        empresa: 'Empresa X',     
        ingresoAnual: 240000,     
        ingresoExento: 4885.65,      
        subsidioEmpleo: 2000,     
        retencionISR: 55000,
        ingresoGravable: 1500,
        aguinaldo: 29400,
        primaVacacional: 3000,        
      }];
    }

    this.actualizarValores();
    
  }

  agregarIngreso() {
    const dialogRef = this.dialog.open(AddIngresoComponent, {disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.ingresos.push(result);

        this.actualizarValores();
      }
    });
  }


  validarIngreso(ingreso: IngresosAsalariado) {
    const dialogRef = this.dialog.open(AddIngresoComponent, {
      disableClose: true,
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
      this.actualizarValores();
    } else {
      // Si el arreglo está vacío, asigna valores por defecto
      this.ingresoAnual = 0;
      this.ingresosExentos = 0;
      this.impuestoRetenido = 0;
      this.ingresosGravables = 0;
      this.ingresosAcumulables = 0;
    }
  }

  openDialog(message: string): void {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }

  getRetencionTotal(ingreso: any): number {
    return (Number(ingreso.retencionISR) || 0) + (Number(ingreso.retencionISRas) || 0);
  }
  
  getIngresoTotal(ingreso: any): number {
    return (Number(ingreso.ingresoAnual) || 0) + (Number(ingreso.ingresoAnualas) || 0);
  }

  actualizarValores() {
    this.ingresoAnual = parseFloat(
      this.ingresos.reduce((total, ingreso) => total + this.getIngresoTotal(ingreso), 0).toFixed(2)
    );
  
    this.impuestoRetenido = parseFloat(
      this.ingresos.reduce((total, ingreso) => total + this.getRetencionTotal(ingreso), 0).toFixed(2)
    );

    this.ingresosExentos = parseFloat(
      this.ingresos.reduce((total, ingreso) => total + (ingreso.ingresoExento || 0), 0).toFixed(2)
    );
  
    this.ingresosGravables = parseFloat(
      this.ingresos.reduce((total, ingreso) => total + (ingreso.ingresoGravable || 0), 0).toFixed(2)
    );
  
    this.ingresosAcumulables = parseFloat(
      ((this.ingresoAnual || 0) + (this.ingresosGravables || 0)).toFixed(2)
    );
  
    // Actualizar valores en el servicio
    this.sueldosService.setIngresoAnual(this.ingresoAnual);
    this.sueldosService.setIngresoAcumulable(this.ingresosAcumulables);
    this.sueldosService.setIsrRetenido(this.impuestoRetenido);
  }
  
  
}
