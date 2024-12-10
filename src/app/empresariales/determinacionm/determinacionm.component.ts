import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeduccionesService } from '../services/deducciones.service';
import { IsrmService } from '../services/isrm.service';
import { IvamService } from '../services/ivam.service';
import { EmpresarialBD } from '../../shared/models/empresarialBD.model';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';
import { EmpresarialService } from '../../core/services/empresarial.service';
import { UserSesionService } from '../../core/services/user-sesion.service';


@Component({
  selector: 'app-determinacionm',
  templateUrl: './determinacionm.component.html',
  styleUrls: ['./determinacionm.component.css']
})
export class DeterminacionmComponent implements OnInit {
  determinacionForm: FormGroup;
  empresarialBD: EmpresarialBD = {};
  userTO: Usuario = {};
  montoISR: number = 0;
  montoDeduccion: number = 0;
  montoIVA: number = 0;

  constructor(private fb: FormBuilder, 
              private isrmservice: IsrmService, 
              private ivamservice: IvamService, 
              private deduccionesService: DeduccionesService,
              private userSesionService: UserSesionService,
              private empresarialHttpService: EmpresarialService,
              private router: Router) {
    this.determinacionForm = this.fb.group({
      isrdet: [{ value: 0, disabled: true }],  // Asignar el valor de ISR aquí
      ivadet: [{ value: 0, disabled: true }],  // Asignar el valor de IVA aquí
      deduccionm: [{ value: 0, disabled: true }],  // Asignar el valor de IVA aquí
    });
  }

  ngOnInit(): void {
    this.userTO = this.userSesionService.getUsuario();
    
    // Obtener el monto ISR desde el servicio
    this.isrmservice.getactualizarisrm().subscribe((montoISR) => {
      this.determinacionForm.get('isrdet')?.setValue(montoISR);
      this.montoISR = montoISR;
    });
  
    // Obtener el monto IVA desde el servicio
    this.ivamservice.getactualizarivam().subscribe((montoIVA) => {
      this.determinacionForm.get('ivadet')?.setValue(montoIVA);
      this.montoIVA = montoIVA;
    });

    this.deduccionesService.getMontoTotalADeducir().subscribe((montoDeduccion) => {
      this.determinacionForm.get('deduccionm')?.setValue(montoDeduccion);
      this.montoDeduccion = montoDeduccion;
    });
  }

  guardar() {
    this.empresarialBD.idUsuario = this.userTO.id;
    this.empresarialBD.isr_final_m = this.montoISR;
    this.empresarialBD.monto_deducir_m = this.montoDeduccion;
    this.empresarialBD.iva_final_m = this.montoIVA;
    this.empresarialBD.tipo_dec = 'M';
    this.empresarialHttpService.addRegistro(this.empresarialBD).subscribe(
      (response) => {
        if(response.success){
          alert('Tu registro se ha creado exitosamente.');
          this.router.navigate(['/empresarial']);
        }else{
          alert('No se pudo guardar el registro. Hubo un errror');
        }
      },
      (error) => {
        alert('No se pudo guardar el registro. Hubo un errror');
      }
    );
  }
}


