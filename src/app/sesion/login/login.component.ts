import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SesionFormGroup } from '../../shared/models/SesionFormGroup.model';
import { UserHttpService } from '../../core/services/user-http-service.service'; // Importar el servicio de autenticación
import { Router } from '@angular/router'; // Importar Router para la redirección
import * as CryptoJS from 'crypto-js'; // Importar CryptoJS

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: SesionFormGroup;
  loading = false;
  errorMessage: string | null = null; // Variable para almacenar el mensaje de error
  passwordVisible = false; // Propiedad para controlar la visibilidad de la contraseña

  constructor(
    private fb: FormBuilder,
    private userHttpService: UserHttpService,
    private router: Router // Inyectar Router para redirigir
  ) {
    this.loginForm = new SesionFormGroup(this.fb); // Instanciamos el formulario
  }

  onSubmit() {
    if (this.loginForm.loginForm.valid) {
      this.loading = true;
      this.errorMessage = null; // Resetear mensaje de error si ya se había mostrado
  
      const { email, password } = this.loginForm.loginForm.value;

      // Generar el hash MD5 de la contraseña
      const hashedPassword = CryptoJS.MD5(password).toString(); 

      this.userHttpService.getUser(email, hashedPassword).subscribe(
        (response) => {
          this.loading = false;
  
          // Verifica si la autenticación fue exitosa
          if (response.success) {
            this.errorMessage = 'Credenciales correctas.';
            // Redireccionar o realizar otras acciones en caso de éxito
          } else {
            // Mostrar un mensaje de error si la autenticación falla
            this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
          }
        },
        (error) => {
          this.loading = false;
          if (error.status === 401) {
            this.errorMessage = 'Correo o contraseña inválidos.'; // Mensaje más claro para error 401
          } else {
            this.errorMessage = 'Error de servidor. Intenta nuevamente.'; // En caso de error en la solicitud
          }
        }
      );
    }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
