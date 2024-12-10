import { Component, OnInit } from '@angular/core';
import { MensualIvaTransferService } from '../../shared/mensual-iva-transfer/mensual-iva-transfer.service';
import { Usuario } from '../../shared/models/usuario.model';
import { ResicoBD } from '../../shared/models/resicoBD.model';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { ResicoHttpService } from '../../core/services/resico-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-mensual-iva',
  templateUrl: './datos-mensual-iva.component.html',
  styleUrl: './datos-mensual-iva.component.css'
})
export class DatosMensualIvaComponent implements OnInit {
  cantidadAPagar: number = 0;
  userTO: Usuario = {};
  resicoBD: ResicoBD = {};
  mes: string = 'Enero'; 
  year: number = 2024;  

  constructor(private transferService: MensualIvaTransferService,
              private userSesionService: UserSesionService,
              private resicoHttpService: ResicoHttpService,
              private router: Router) {}

  ngOnInit(): void {
    this.userTO = this.userSesionService.getUsuario();
    // Escuchar el valor de "Cantidad a pagar"
    this.transferService.cantidadAPagar$.subscribe((value) => {
      this.cantidadAPagar = value;
    });
  }

  save(): void {
    this.resicoBD.idUsuario = this.userTO.id;
    this.resicoBD.cantidadPagar = this.cantidadAPagar;
    this.resicoBD.mes = this.mes;
    this.resicoBD.year = this.year;
    this.resicoHttpService.addRegistro(this.resicoBD).subscribe(
      (response) => {
        if(response.success){
          alert('Tu registro se ha creado exitosamente.');
          this.router.navigate(['/resico']);
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
