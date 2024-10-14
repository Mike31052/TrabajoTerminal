// signupFormGroup.model.ts
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ChangePasswordFormGroup {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({ 
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  // Método para validar que las contraseñas coincidan
  private passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // Métodos para obtener el estado de validación de los campos
  get password() {
    return this.changePasswordForm.get('password');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

}
