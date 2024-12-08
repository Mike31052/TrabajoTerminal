import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeduccionesService } from '../services/deducciones.service';
import { IsrmService } from '../services/isrm.service';
import { IvamService } from '../services/ivam.service';


@Component({
  selector: 'app-determinacionm',
  templateUrl: './determinacionm.component.html',
  styleUrls: ['./determinacionm.component.css']
})
export class DeterminacionmComponent implements OnInit {
  determinacionForm: FormGroup;

  constructor(private fb: FormBuilder, private isrmservice: IsrmService, private ivamservice: IvamService, private deduccionesService: DeduccionesService) {
    this.determinacionForm = this.fb.group({
      isrdet: [{ value: 0, disabled: true }],  // Asignar el valor de ISR aquí
      ivadet: [{ value: 0, disabled: true }],  // Asignar el valor de IVA aquí
      deduccionm: [{ value: 0, disabled: true }],  // Asignar el valor de IVA aquí
    });
  }

  ngOnInit(): void {
    // Obtener el monto ISR desde el servicio
    this.isrmservice.getactualizarisrm().subscribe((montoISR) => {
      this.determinacionForm.get('isrdet')?.setValue(montoISR);
    });
  
    // Obtener el monto IVA desde el servicio
    this.ivamservice.getactualizarivam().subscribe((montoIVA) => {
      this.determinacionForm.get('ivadet')?.setValue(montoIVA);
    });

    this.deduccionesService.getMontoTotalADeducir().subscribe((montoDeduccion) => {
      this.determinacionForm.get('deduccionm')?.setValue(montoDeduccion);
    });
  }
}


