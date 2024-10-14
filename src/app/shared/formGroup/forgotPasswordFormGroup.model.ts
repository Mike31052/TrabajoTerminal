import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ForgotPasswordFormGroup {
  fpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Método para obtener el estado de la validación de los campos
  get email() {
    return this.fpForm.get('email');
  }

}
