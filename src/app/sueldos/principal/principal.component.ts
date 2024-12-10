import { Component, OnInit } from '@angular/core';
import { SueldosBD } from '../../shared/models/sueldosDB.model';
import { SueldosHttpService } from '../../core/services/sueldos-http.service';
import { Usuario } from '../../shared/models/usuario.model';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'], // Ajuste en la propiedad styleUrls
})
export class PrincipalComponent implements OnInit {
  sueldosBD: SueldosBD[] = [];
  userTO: Usuario = {};
  userId: string = '';
  loading: boolean = false;

  showModal = false;
  modalTitle = 'Sueldos, Salarios y Asimilados';
  videoSrc = '';
  videoNumber: number = 0;

  constructor(
    private dialog: MatDialog,
    private sueldosHttpService: SueldosHttpService,
    private userService: UserSesionService
  ) {}

  ngOnInit(): void {
    this.userTO = this.userService.getUsuario();
    if (this.userTO.id) {
      this.userId = this.userTO.id;
      this.fetchSueldos();
    }
  }

  fetchSueldos(): void {
    this.loading = true;
    this.sueldosHttpService.getSueldos(this.userId).subscribe(
      (response) => {
        this.sueldosBD = response || [];
        this.loading = false;
      },
      (error) => {
        alert('No se pudo obtener los registros. Hubo un error');
        this.sueldosBD = [];
        this.loading = false;
      }
    );
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onBackdropClick(event: MouseEvent) {
    this.closeModal();
  }
  
}
