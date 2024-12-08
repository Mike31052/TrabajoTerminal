import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Deducciones2Service } from '../services/deducciones2.service';
import { IsraService } from '../services/isra.service';
import { EmpresarialBD } from '../../shared/models/empresarialBD.model';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { Usuario } from '../../shared/models/usuario.model';
import { EmpresarialService } from '../../core/services/empresarial.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-determinaciona',
  templateUrl: './determinaciona.component.html',
  styleUrl: './determinaciona.component.css'
})
export class DeterminacionaComponent implements OnInit {
  
  determinacionanualForm: FormGroup;
  empresarialBD: EmpresarialBD = {};
  userTO: Usuario = {};
  montoISR: number = 0;
  montoDeduccion: number = 0;
  constructor(private fb: FormBuilder, 
              private israservice: IsraService, 
              private deducciones2Service: Deducciones2Service,
              private userSesionService: UserSesionService,
              private empresarialHttpService: EmpresarialService,
              private router: Router) {
    this.determinacionanualForm = this.fb.group({
      isrdeta: [{ value: 0, disabled: true }],  // Asignar el valor de ISR aquí
      deducciona: [{ value: 0, disabled: true }],  // Asignar el valor de IVA aquí
    });
  }

  ngOnInit(): void {
    this.userTO = this.userSesionService.getUsuario();

    // Obtener el monto ISR desde el servicio
    this.israservice.getactualizarisra().subscribe((montoISR) => {
      this.determinacionanualForm.get('isrdeta')?.setValue(montoISR);
      this.montoISR = montoISR;
    });
  
// Obtener el monto deducciones desde el servicio
    this.deducciones2Service.getMontoTotalADeducir().subscribe((montoDeduccion) => {
      this.determinacionanualForm.get('deducciona')?.setValue(montoDeduccion);
      this.montoDeduccion = montoDeduccion;
    });
  }

  guardar() {
    this.empresarialBD.idUsuario = this.userTO.id;
    this.empresarialBD.isr_final_a = this.montoISR;
    this.empresarialBD.monto_deducir_a = this.montoDeduccion;
    this.empresarialBD.tipo_dec = 'A';
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
