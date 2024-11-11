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
  console.log("usuario: ", this.userTO);
  }

  logout(){
    if(this.userSesionService.isLoggedIn()){
      this.userSesionService.clearUsuario();
    }
    this.router.navigate(['/']);

  }
}