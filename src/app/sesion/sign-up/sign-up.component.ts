// sign-up.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpFormGroup } from '../../shared/models/SignUpFormGroup.model'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: SignUpFormGroup; // Usamos la clase SignupFormGroup

  constructor(private fb: FormBuilder) {
    this.signUpForm = new SignUpFormGroup(this.fb); // Instanciamos la clase
  }

  ngOnInit(): void {}

  onSignUpSubmit() {
    if (this.signUpForm.signUpForm.valid) {
      console.log('Formulario de registro válido:', this.signUpForm.signUpForm.value);
      // Lógica para manejar el envío de datos de registro
    }
  }
}
