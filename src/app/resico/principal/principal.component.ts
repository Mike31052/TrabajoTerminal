import { Component } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';
import { ResicoHttpService } from '../../core/services/resico-http.service';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { ResicoBD } from '../../shared/models/resicoBD.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  userTO: Usuario = {};
  resicoBD: ResicoBD[] = [];
  userId: string = '';
  loading: boolean = false;

  constructor(
    private resicoHttpService: ResicoHttpService,
    private userService: UserSesionService
  ) {}

  ngOnInit(): void {
    this.userTO = this.userService.getUsuario();
    if (this.userTO.id) {
      this.userId = this.userTO.id;
      this.fetchResico();
    }
  }

  fetchResico(): void {
    this.loading = true;
    this.resicoHttpService.getResico(this.userId).subscribe(
      (response) => {
        this.resicoBD = response || []; // Garantizar un arreglo vacío si la respuesta es null o undefined
        this.loading = false;
      },
      (error) => {
        alert('No se pudo obtener los registros. Hubo un error');
        this.resicoBD = []; // Resetear en caso de error
        this.loading = false;
      }
    );
  }
  
}
