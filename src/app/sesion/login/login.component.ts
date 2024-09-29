import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SesionFormGroup } from '../../shared/models/SesionFormGroup.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: SesionFormGroup; // Usamos la clase LoginForm
  loading = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = new SesionFormGroup(this.fb); // Instanciamos la clase
  }

  onSubmit() {
    if (this.loginForm.loginForm.valid) {
      this.loading = true;
      console.log(this.loginForm.loginForm.value);
      
      // Simulando proceso de inicio de sesión
      setTimeout(() => {
        this.loading = false;
        // Aquí va la lógica de inicio de sesión
      }, 2000);
    }
  }
}
