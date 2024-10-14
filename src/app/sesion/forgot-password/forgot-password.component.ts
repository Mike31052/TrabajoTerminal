import { Component } from '@angular/core';
import { UserHttpService } from '../../core/services/user-http-service.service';
import { Router } from '@angular/router';
import { ForgotPasswordFormGroup } from '../../shared/formGroup/forgotPasswordFormGroup.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotPasswordForm: ForgotPasswordFormGroup;
  errorMessage: String = '';
  successMessage: String = '';

  constructor(
    private fb: FormBuilder,
    private userHttpService: UserHttpService, // Servicio HTTP
    private router: Router
  ) {
    this.forgotPasswordForm = new ForgotPasswordFormGroup(this.fb);
  }

  onFPSubmit() {
    if (this.forgotPasswordForm.fpForm.valid) {

      this.errorMessage = '';
      this.successMessage = '';

      const email = this.forgotPasswordForm.fpForm.value;

      // Llamar al servicio para cambiar la contraseña
      this.userHttpService.forgotPassword(email).subscribe(
        (response) => {
          if(response.success){
            this.successMessage = response.message;
            // Redirigir a la página de login
            setTimeout(() => {
            this.router.navigate(['/']);
          }, 5000); // 5000 ms = 5 segundos
          }else {
            this.errorMessage = response.message;
          }
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
    }
  }

  goToLogin(){
    this.router.navigate(['/']);
  }
}
