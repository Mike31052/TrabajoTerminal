import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserHttpService } from '../../core/services/user-http-service.service'; // Servicio HTTP
import { ActivatedRoute, Router } from '@angular/router'; // Para redirigir después de cambiar la contraseña
import { MD5 } from 'crypto-js'; // Para hashear la contraseña
import { ChangePasswordFormGroup } from '../../shared/formGroup/changePasswordFormGroup.model';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: ChangePasswordFormGroup;
  errorMessage: String = '';
  successMessage: String = '';
  token: string = '';
  validationMessage: String = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userHttpService: UserHttpService, // Servicio HTTP
    private router: Router // Redirección
  ) {
    // Inicializar el formulario con validaciones
    this.changePasswordForm = new ChangePasswordFormGroup(this.fb);
  }

  ngOnInit(): void {
    // Obtener el token desde la URL
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];

      // Si existe el token, se hace la verificación
      if (this.token) {
        this.userHttpService.verifyToken2(this.token).subscribe(
          (response) => {
            
          },
          (error) => {
            // Manejo de error en la petición HTTP
            this.validationMessage = 'Hubo un problema al validar el correo.';
            console.error('Error al validar el token:', error);
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 5000); // 5000 ms = 5 segundos
          }
        );
      } else {
        // Si no hay token en la URL, muestra un mensaje de error
        this.validationMessage = 'No se encontró un token en la URL.';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000); // 5000 ms = 5 segundos
      }
    });
  }

  onSignUpSubmit() {
    if (this.changePasswordForm.changePasswordForm.valid) {

      this.errorMessage = '';
      this.successMessage = '';

      const { password, confirmPassword } = this.changePasswordForm.changePasswordForm.value;

      // Verificar que las contraseñas coincidan
      if (password !== confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      // Convertir la contraseña en hash MD5
      const hashedPassword = MD5(password).toString();

      // Llamar al servicio para cambiar la contraseña
      this.userHttpService.changePassword(this.token, hashedPassword).subscribe(
        (response) => {
          if(response.success){
            this.successMessage = response.message;
            // Redirigir a la página de login
            setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000); // 5000 ms = 5 segundos
          }else{
            this.errorMessage = response.message;
          }
        },
        (error) => {
          console.error('Error al cambiar la contraseña:', error);
          this.errorMessage = error.error.message || 'Ocurrió un error al cambiar la contraseña.';
        }
      );
    }
  }
}
