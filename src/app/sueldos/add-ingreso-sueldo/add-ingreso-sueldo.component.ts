import { Component } from '@angular/core';

@Component({
  selector: 'app-add-ingreso-sueldo',
  templateUrl: './add-ingreso-sueldo.component.html',
  styleUrls: ['./add-ingreso-sueldo.component.css']
})
export class AddIngresoSueldoComponent {
  activeSection: string = '';

  toggleCollapse(sectionId: string) {
    this.activeSection = this.activeSection === sectionId ? '' : sectionId;
  }
}
