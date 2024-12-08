import { Component } from '@angular/core';
import { SueldosService } from '../../core/services/sueldos.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SueldosBD } from '../../shared/models/sueldosDB.model';
import { SueldosHttpService } from '../../core/services/sueldos-http.service';
import { Usuario } from '../../shared/models/usuario.model';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-determinacion',
  templateUrl: './determinacion.component.html',
  styleUrl: './determinacion.component.css'
})
export class DeterminacionComponent {

  ingresoAcumulable: number = 0;
  deduccionesPersonales: number = 0;
  baseGravable: number = 0;
  limiteInferior: number = 0;
  excedenteLimiteInferior: number = 0;
  porcentajeExcedente: number = 0;
  impuestoMarginal: number = 0;
  cuotaFija: number = 0;
  isrTarifaAnual: number = 0;
  isrRetenido: number = 0;
  isrFinal: number = 0;
  validacion:boolean = false;
  sueldosBD: SueldosBD = {};
  userTO: Usuario = {};

  limites_inf: number[] = [
    0.01, 8952.50, 75984.56, 133536.08, 155229.81,
    185852.58, 374837.89, 590796.00, 1127926.85,
    1503902.48, 4511707.38
  ];

  porcentajes_exc: number[] = [
    1.92, 6.4, 10.88, 16, 17.92, 21.36, 23.52, 30,
    32, 34, 35
  ];

  cuotas: number[] = [
    0, 171.88, 4461.94, 10723.55, 14194.54,
    19682.13, 60049.40, 110842.74, 271891.29,
    392294.17, 1414947.85
  ];

  constructor(private dialog: MatDialog,
    private sueldosService: SueldosService,
    private sueldosHttpService: SueldosHttpService,
    private userService: UserSesionService,
    private router: Router){}

  ngOnInit(){
    this.actualizarValores();
    this.userTO = this.userService.getUsuario();
  }

  actualizarValores(){
    this.sueldosService.ingresoAcumulable$.subscribe((value) => {
      this.ingresoAcumulable = value;
    });

    this.sueldosService.deduccionesPersonales$.subscribe((value) => {
      this.deduccionesPersonales = value;
    });

    this.sueldosService.isrRetenido$.subscribe((value) => {
      this.isrRetenido = value;
    });

    if(this.ingresoAcumulable > this.deduccionesPersonales){
      this.baseGravable = this.ingresoAcumulable - this.deduccionesPersonales;

      // Encontrar el límite inferior
      const index = this.limites_inf
      .map((limite, idx) => ({ limite, idx }))
      .filter(item => item.limite <= this.baseGravable)
      .reduce((prev, current) => current.limite > prev.limite ? current : prev, { limite: 0, idx: 0 }).idx;

      this.limiteInferior = this.limites_inf[index];
      this.excedenteLimiteInferior = Math.round((this.baseGravable - this.limiteInferior) * 100) / 100;
      this.porcentajeExcedente = this.porcentajes_exc[index];
      this.impuestoMarginal = Math.round((this.porcentajeExcedente * this.excedenteLimiteInferior) / 100);
      this.cuotaFija = this.cuotas[index];
      this.isrTarifaAnual = this.impuestoMarginal + this.cuotaFija;
      if(this.isrRetenido >= this.isrTarifaAnual){
        this.isrFinal = Math.round((this.isrRetenido - this.isrTarifaAnual) / 100); 
        //ISR a cargo
        this.validacion = true;
      } else {
        this.isrFinal = Math.round((this.isrTarifaAnual - this.isrRetenido) / 100); 
        //ISR a favor
        this.validacion = false;
      }   
    }else{
      this.isrFinal = this.deduccionesPersonales - this.isrRetenido
      //ISR a favor
      this.validacion = true;
    }
  }

  guardar(){
    if(this.validarDatos()){
      this.sueldosBD.base_gravable = this.baseGravable;
      this.sueldosBD.ingresos_acumulables = this.ingresoAcumulable;
      this.sueldosBD.deducciones_personales = this.deduccionesPersonales;
      this.sueldosBD.isr_resultante = this.isrFinal;
      this.sueldosBD.isr_retenido = this.isrRetenido;
      this.sueldosBD.id_usuario = this.userTO.id;
      this.sueldosBD.isCargo = this.validacion;
      this.sueldosHttpService.addRegistro(this.sueldosBD).subscribe(
        (response) => {
          if(response.success){
            alert('Tu registro se ha creado exitosamente.');
            this.router.navigate(['/sueldos-y-salarios']);
          }else{
            alert('No se pudo guardar el registro. Hubo un errror');
          }
        },
        (error) => {
          alert('No se pudo guardar el registro. Hubo un errror');
        }
      );
    }else{
      alert('Debes llenar el formulario para guardar.')
    }
  }

  openDialog(message: string): void {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }

  validarDatos(){
    if(this.ingresoAcumulable!=0 && this.baseGravable!=0 && this.isrRetenido!=0 && this.isrFinal!=0){
      return true;
    }else{
      return false
    }
  }
}
