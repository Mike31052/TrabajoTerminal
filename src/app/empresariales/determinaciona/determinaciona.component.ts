import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Deducciones2Service } from '../services/deducciones2.service';
import { IsraService } from '../services/isra.service';


@Component({
  selector: 'app-determinaciona',
  templateUrl: './determinaciona.component.html',
  styleUrl: './determinaciona.component.css'
})
export class DeterminacionaComponent implements OnInit {
  
  determinacionanualForm: FormGroup;

  constructor(private fb: FormBuilder, private israservice: IsraService, private deducciones2Service: Deducciones2Service) {
    this.determinacionanualForm = this.fb.group({
      isrdeta: [{ value: 0, disabled: true }],  // Asignar el valor de ISR aquí
      deducciona: [{ value: 0, disabled: true }],  // Asignar el valor de IVA aquí
    });
  }

  ngOnInit(): void {
    // Obtener el monto ISR desde el servicio
    this.israservice.getactualizarisra().subscribe((montoISR) => {
      this.determinacionanualForm.get('isrdeta')?.setValue(montoISR);
    });
  
  
// Obtener el monto deducciones desde el servicio
    this.deducciones2Service.getMontoTotalADeducir().subscribe((montoDeduccion) => {
      this.determinacionanualForm.get('deducciona')?.setValue(montoDeduccion);
    });
  }

}
