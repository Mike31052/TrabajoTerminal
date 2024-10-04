import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpFormGroup } from '../../shared/models/SignUpFormGroup.model'; 
import { UserHttpService } from '../../core/services/user-http-service.service'; // Servicio para crear el usuario
import { Router } from '@angular/router'; // Para redirigir después del registro
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: SignUpFormGroup;
  emailAlreadyExists: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private userHttpService: UserHttpService, // Servicio HTTP
    private router: Router // Redirección
  ) {
    this.signUpForm = new SignUpFormGroup(this.fb);
  }

  ngOnInit(): void {}
  

  onSignUpSubmit() {
    if (this.signUpForm.signUpForm.valid) {
      const { nombre, email, password, edad } = this.signUpForm.signUpForm.value;

      // Convertir la contraseña en hash MD5
      const hashedPassword = MD5(password).toString();

      // Crear un objeto con los datos del formulario, incluyendo la contraseña hasheada
      const user = {
        nombre,
        correo: email,
        contraseña: hashedPassword,
        edad
      };

      // Llamar al servicio para crear el usuario
      this.userHttpService.createUser(user).subscribe(
        (response) => {
          console.log('Usuario creado con éxito:', response);
          // Redirigir a la página de inicio de sesión o donde se requiera
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error al crear el usuario:', error);
          // Manejar el error y actualizar el estado de la alerta
          if (error.status === 500) {
            this.emailAlreadyExists = true; // Establecer a true si el correo ya existe
          } else {
            // Manejar otros errores si es necesario
            this.emailAlreadyExists = false; // Restablecer si hay otro error
          }
        }
      );
    }
  }

}
