import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SesionFormGroup } from '../../shared/formGroup/SesionFormGroup.model';
import { UserHttpService } from '../../core/services/user-http-service.service'; // Importar el servicio de autenticación
import { Router } from '@angular/router'; // Importar Router para la redirección
import * as CryptoJS from 'crypto-js'; // Importar CryptoJS
import { Usuario } from '../../shared/models/usuario.model';
import { UserSesionService } from '../../core/services/user-sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: SesionFormGroup;
  loading = false;
  errorMessage: String = '';
  successMessage: String = '';
  userTO?: Usuario;

  constructor(
    private fb: FormBuilder,
    private userHttpService: UserHttpService,
    private router: Router, // Inyectar Router para redirigir
    private userSesionService: UserSesionService
  ) {
    this.loginForm = new SesionFormGroup(this.fb); // Instanciamos el formulario
  }

  onSubmit() {
    if (this.loginForm.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';
       
      const { email, password } = this.loginForm.loginForm.value;

      // Generar el hash MD5 de la contraseña
      const hashedPassword = CryptoJS.MD5(password).toString(); 

      this.userHttpService.getUser(email, hashedPassword).subscribe(
        (response) => {
          this.loading = false;
          this.successMessage = "Credenciales correctas";
          this.userTO = response.user;
          this.userSesionService.setUsuario(this.userTO);
          if(this.userTO?.regimen == null || this.userTO.regimen == ''){
            this.router.navigate(['/info-reg']);
          }else{
            this.router.navigate(['/Inicio']);
          }
        },
        (error) => {
          this.loading = false;
          this.errorMessage = error.error.message;
          console.log(error);
        }
      );
    }
  }

  iniciarInvitado(){
    this.router.navigate(['/Inicio']);
  }
}
