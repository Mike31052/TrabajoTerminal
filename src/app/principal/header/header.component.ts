import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() title: string = '';
  userTO?: Usuario;

  constructor(private router: Router,
    private userSesionService: UserSesionService
  ){}

  ngOnInit(): void {
  this.userTO = this.userSesionService.getUsuario();
  }

  logout(){
    if(this.userSesionService.isLoggedIn()){
      this.userSesionService.clearUsuario();
    }
    this.router.navigate(['/']);
  }

  goToImpuestos() {
    this.userTO = this.userSesionService.getUsuario();
    console.log(this.userTO);
    if(this.userTO?.regimen){
      if(this.userTO.regimen == 'SS'){
        this.router.navigate(['/sueldos-y-salarios/ejercicio']);
      }else if(this.userTO.regimen == 'SC'){
        this.router.navigate(['/escoger-declaracion']);
      }else if(this.userTO.regimen == 'EP'){
        this.router.navigate(['/edatos']);
      }
    }else{
      alert('Primero confirma a que regimen perteneces');
    }
  }
}