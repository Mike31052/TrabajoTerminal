// signupFormGroup.model.ts
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class SignUpFormGroup {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]]
    }, { validator: this.passwordMatchValidator });
  }

  // Método para validar que las contraseñas coincidan
  private passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // Métodos para obtener el estado de validación de los campos
  get nombre() {
    return this.signUpForm.get('nombre');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get edad() {
    return this.signUpForm.get('edad');
  }
}
