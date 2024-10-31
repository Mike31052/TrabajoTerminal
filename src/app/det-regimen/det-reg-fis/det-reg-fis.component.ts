
import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserSesionService } from '../../core/services/user-sesion.service';
import { Usuario } from '../../shared/models/usuario.model';
import { UserHttpService } from '../../core/services/user-http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-det-reg-fis',
  templateUrl: './det-reg-fis.component.html',
  styleUrls: ['./det-reg-fis.component.css']
})
export class DetRegFisComponent implements OnInit {
  selectedOption: string | undefined;
  titulo: string = '';
  contenido: string = '';
  currentSlideIndex: number = 0;
  slideInterval: any;
  isPaused: boolean = false;
  userTO?: Usuario;

  constructor(private renderer: Renderer2,
              private userSesionService: UserSesionService,
              private userHttpService: UserHttpService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.userTO = this.userSesionService.getUsuario();
    if (typeof window !== 'undefined') {
      // Show the first slide without animation
      const slides = this.renderer.selectRootElement('.slide', true).parentElement.children;
      if (slides.length > 0) {
        this.renderer.setStyle(slides[0], 'display', 'block');
      }

      // Start the slideshow after a brief delay
      setTimeout(() => {
        this.startSlideshow();
      }, 3000); // Wait 3 seconds before starting the slideshow
    }
  }

  confirmarRegimen() {
        this.userTO!.regimen = this.selectedOption;
        this.userHttpService.updateRegimen(this.userTO!).subscribe(
          (response) => {
            console.log("Éxito:", response);
          },
          (error) => {
            console.error("Error al actualizar régimen:", error);
          }
        );
        this.router.navigate(['/Inicio']);
  }


  mostrarMensaje() {
    switch (this.selectedOption) { 
      case 'SC':
        this.contenido = 'Este régimen es una simplificación administrativa diseñada para facilitar el pago de impuestos a personas físicas con ingresos anuales menores a 3.5 millones de pesos. Está dirigido a aquellos que desarrollan actividades empresariales, profesionales, o que obtienen ingresos del arrendamiento de bienes inmuebles y actividades del sector primario como la agricultura, ganadería, pesca o silvicultura.';
        break;
      case 'SS':
        this.contenido = 'Este régimen está diseñado para personas que reciben ingresos a través de un contrato laboral formal. Estos ingresos se derivan de una relación de trabajo subordinada entre un trabajador y un empleador. El empleador asigna tareas específicas al trabajador, le paga periódicamente y, en algunos casos, proporciona beneficios adicionales, como seguros y prestaciones sociales.';
        break;
      case 'PT':
        this.contenido = 'Este régimen aplica a personas físicas que generan ingresos a través de la venta de bienes o la prestación de servicios mediante plataformas tecnológicas como aplicaciones móviles o sitios web. Se implementó con el objetivo de regular a quienes generan ingresos mediante plataformas como Uber, Airbnb, o ventas en línea.';
        break;
      case 'EP':
        this.contenido = 'Este régimen está dirigido a personas físicas que realizan actividades empresariales o profesionales, como comerciantes, artesanos, abogados, o médicos. No existe un límite de ingresos, y los contribuyentes pueden deducir gastos relacionados con la actividad que realicen, lo que puede reducir el monto de impuestos a pagar.';
        break;
      default:
        this.contenido = '';
    }
  }

  startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.showSlide(this.currentSlideIndex + 1);
      }
    }, 5000); // Cambia de diapositiva cada 5 segundos

    const slideshowContainer = this.renderer.selectRootElement('.slideshow-container', true);

    // Pausar el cambio de diapositivas cuando el mouse esté sobre la presentación
    this.renderer.listen(slideshowContainer, 'mouseenter', () => {
      this.isPaused = true;
    });

    // Reanudar el cambio de diapositivas cuando el mouse salga de la presentación
    this.renderer.listen(slideshowContainer, 'mouseleave', () => {
      this.isPaused = false;
    });
  }

  showSlide(index: number): void {
    const slides = this.renderer.selectRootElement('.slide', true).parentElement.children;
    if (slides.length > 0) {
      // Apply exit animation to the current slide
      this.renderer.addClass(slides[this.currentSlideIndex], 'slide-exit');

      // Update the slide index to loop back to the first slide after the last one
      this.currentSlideIndex = (index) % slides.length;

      // Apply enter animation to the new slide
      this.renderer.setStyle(slides[this.currentSlideIndex], 'display', 'block');
      this.renderer.addClass(slides[this.currentSlideIndex], 'slide-enter');

      // Ensure both animations happen simultaneously
      setTimeout(() => {
        // Hide the previous slide after the transition completes
        const prevSlideIndex = (this.currentSlideIndex - 1 + slides.length) % slides.length;
        this.renderer.setStyle(slides[prevSlideIndex], 'display', 'none');
        this.renderer.removeClass(slides[prevSlideIndex], 'slide-exit');

        this.renderer.removeClass(slides[this.currentSlideIndex], 'slide-enter');
        this.renderer.setStyle(slides[this.currentSlideIndex], 'display', 'block'); // Keep the new slide visible
      }, 1000); // Match the animation duration for seamless transition
    }
  }

  prevSlide(): void {
    this.showSlide(this.currentSlideIndex - 1);
  }

  nextSlide(): void {
    this.showSlide(this.currentSlideIndex + 1);
  }
}
