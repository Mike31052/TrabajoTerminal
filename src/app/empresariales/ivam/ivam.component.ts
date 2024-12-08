import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { DeduccionesService } from '../services/deducciones.service'; // Asegúrate de que la ruta sea correcta
import { IvamService } from '../services/ivam.service';

@Component({
  selector: 'app-ivam',
  templateUrl: './ivam.component.html',
  styleUrls: ['./ivam.component.css']
})
export class IvamComponent implements OnInit {
  ivamForm: FormGroup;
  

  constructor(private fb: FormBuilder, private deduccionesService: DeduccionesService,  private dialog: MatDialog, private ivamService: IvamService) {
    this.ivamForm = this.fb.group({
      actividades16: [0],
      ivaCobrado16: [{ value: 0, disabled: true }],
      ivaAcreditable: [{ value: 0, disabled: true }],
      ivaRetenido: [0],
      cantidadCargo: [{ value: 0, disabled: true }],
      otrasCantidadesFavor: [0],
      ivaCobrar: [{ value: 0, disabled: true }]
    });
  }

  ngOnInit(): void {
    // Obtenemos el monto total a deducir desde el servicio compartido
    this.deduccionesService.getMontoTotalADeducir().subscribe((montoDeduccion) => {
      this.ivamForm.get('ivaAcreditable')?.setValue(montoDeduccion);
    });
  }

  

  calcularIVA(): void {
    const actividades16 = this.ivamForm.get('actividades16')?.value || 0;
    const ivaAcreditable = this.ivamForm.get('ivaAcreditable')?.value || 0;
    const ivaRetenido = this.ivamForm.get('ivaRetenido')?.value || 0;
    const otrasCantidadesFavor = this.ivamForm.get('otrasCantidadesFavor')?.value || 0;

    const ivaCobrado16 = actividades16 * 0.16;
    this.ivamForm.get('ivaCobrado16')?.setValue(ivaCobrado16);

    const cantidadCargo = ivaCobrado16 - ivaAcreditable - ivaRetenido;
    this.ivamForm.get('cantidadCargo')?.setValue(cantidadCargo);

    const ivaCobrar = cantidadCargo - otrasCantidadesFavor;
    this.ivamForm.get('ivaCobrar')?.setValue(ivaCobrar);
  }

  openDialog(message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }

  actualizariva() {
    const ivaCobrar = this.ivamForm.get('ivaCobrar')?.value;
    if (ivaCobrar !== undefined && ivaCobrar !== null) {
      this.ivamService.setactualizarivam(ivaCobrar);  // Enviar el valor al servicio
    } else {
      console.error('El valor de IVA a cobrar no es válido');
    }
  }
}
