import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngresosAsalariado } from '../../shared/models/ingresos-sueldos.model';
import { Usuario } from '../../shared/models/usuario.model';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { AddIngresoSueldoComponent } from '../add-ingreso-sueldo/add-ingreso-sueldo.component';
import { AddIngresoAsimiladoComponent } from '../add-ingreso-asimilado/add-ingreso-asimilado.component';

@Component({
  selector: 'app-add-ingreso',
  templateUrl: './add-ingreso.component.html',
  styleUrls: ['./add-ingreso.component.css']
})
export class AddIngresoComponent {

  @ViewChild('componenteSueldo') componenteSueldo!: AddIngresoSueldoComponent;
  @ViewChild('componenteAsimilado') componenteAsimilado!: AddIngresoAsimiladoComponent;

  ingreso: IngresosAsalariado = {};
  opcionSeleccionada: string = ''; // Almacena la selección del usuario
  mostrarError: boolean = false;  // Maneja la visibilidad del error
  isConfirm: boolean = false;
  confirmacion: boolean = false;
  userTO?: Usuario;

  constructor(
    public dialogRef: MatDialogRef<AddIngresoComponent>,
    private userSesionService: UserSesionService,
    @Inject(MAT_DIALOG_DATA) public data: { ingreso: IngresosAsalariado }
  ) {
    if (data && data.ingreso) {
      this.ingreso = data.ingreso;
      this.isConfirm = true;
    } else {
      this.ingreso = {}; // Asignar un objeto vacío si no se pasa 'ingreso'
    }
  }

  ngOnInit() {
    this.userTO = this.userSesionService.getUsuario();
    if(this.ingreso.confirmacion){
      if(this.ingreso.confirmacion == true){
        this.opcionSeleccionada = 'si';
      }else{
        this.opcionSeleccionada = 'no';
      }
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.userTO?.id_usuario) {
      // Lógica cuando el usuario inició sesión
    } else {
      if (this.isConfirm) {
        // Validar ingreso
        if (!this.opcionSeleccionada) {
          this.mostrarError = true;
          return;
        }
        if(this.opcionSeleccionada == 'si'){
          this.confirmacion = true;
        } else if(this.opcionSeleccionada == 'no'){
          this.confirmacion = false;
        }
        this.mostrarError = false;
        this.ingreso.confirmacion = this.confirmacion;
        this.dialogRef.close(this.ingreso);
      } else {
        // Lógica cuando se está agregando un ingreso como invitado
        if(this.componenteSueldo.validarCampos()){
          this.ingreso.id_ingreso = 1;
          this.dialogRef.close(this.ingreso);
        } else if(this.componenteAsimilado.validarCampos()){
          this.ingreso.id_ingreso = 1;
          this.dialogRef.close(this.ingreso);
        }
        else{
          alert('El ingreso anual e ISR son obligatorios');
        }
      }
    }
  }
}
