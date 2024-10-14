import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from '../../core/services/user-http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-token',
  templateUrl: './validate-token.component.html',
  styleUrl: './validate-token.component.css'
})
export class ValidateTokenComponent {

  validationMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private userHttpService: UserHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el token desde la URL
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];

      // Si existe el token, se hace la verificación
      if (token) {
        this.userHttpService.verifyToken(token).subscribe(
          (response) => {
            //Se muestra el mensaje de la validación
            this.validationMessage = response.message;
          },
          (error) => {
            // Manejo de error en la petición HTTP
            this.validationMessage = 'Hubo un problema al validar el correo.';
            console.error('Error al validar el token:', error);
          }
        );
      } else {
        // Si no hay token en la URL, muestra un mensaje de error
        this.validationMessage = 'No se encontró un token en la URL.';
      }
    });
  }

  inicioSesion(): void {
    this.router.navigate(['/']);

  }
}
