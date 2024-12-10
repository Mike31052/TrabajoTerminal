import { Component, OnInit } from '@angular/core';
import { EmpresarialBD } from '../../shared/models/empresarialBD.model';
import { Usuario } from '../../shared/models/usuario.model';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { EmpresarialService } from '../../core/services/empresarial.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  empresarialBD: EmpresarialBD[] = [];
  userTO: Usuario = {};
  userId: string = '';
  loading: boolean = false;

  constructor(
    private empresarialService: EmpresarialService,
    private userService: UserSesionService
  ) {}

  ngOnInit(): void {
    this.userTO = this.userService.getUsuario();
    if (this.userTO.id) {
      this.userId = this.userTO.id;
      this.fetchEmpresarial();
    }
  }

  fetchEmpresarial(): void {
    this.loading = true;
    this.empresarialService.getEmpresarial(this.userId).subscribe(
      (response) => {
        this.empresarialBD = response || [];
        this.loading = false;
      },
      (error) => {
        alert('No se pudo obtener los registros. Hubo un error');
        this.empresarialBD = [];
        this.loading = false;
      }
    );
  }
}
