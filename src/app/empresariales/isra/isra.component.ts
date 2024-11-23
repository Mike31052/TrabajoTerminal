import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { Deducciones2Service } from '../services/deducciones2.service';

@Component({
  selector: 'app-isra',
  templateUrl: './isra.component.html',
  styleUrls: ['./isra.component.css']
})
export class IsraComponent implements OnInit {
  israForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private deduccionesservice2: Deducciones2Service
  ) {
    this.israForm = this.fb.group({
      copropiedadanual: ['no', Validators.required],
      ingresosCopropiedadanual: [{ value: 0, disabled: true }],
      ingresosPeriodoanual: [0, Validators.required],
      totalIngresosanual: [{ value: 0, disabled: true }],
      totalIngresosAcumulablesanual: [{ value: 0, disabled: true }],
      comprasPeriodoanual: [0, Validators.required],
      totalComprasGastosanual: [0, Validators.required],
      facilidades: ['no', Validators.required],
      utilidadesanual: [0, Validators.required],
      baseGravableanual: [{ value: 0, disabled: true }],
      isrCausadoanual: [{ value: 0, disabled: true }],
      estimulosanual: ['no', Validators.required],
      pagosAnterioresanual: [0, Validators.required],
      isrRetenidoPeriodoanual: [0, Validators.required],
      impuestoRetenidoanual: [{ value: 0, disabled: true }],
      isrACargoanual: [{ value: 0, disabled: true }],
      estimulosFiscales: [0, Validators.required],
      perdidasfiscales: [0, Validators.required],
      deduccionesPersonales: [{ value: 0, disabled: true }],
      baseGravable: [{ value: 0, disabled: true }],
      ingresosPremios: ['no', Validators.required],
      montoPremios: [0],
      impuestoPremios: [{ value: 0, disabled: true }]
    });
  }

  ngOnInit(): void {
    this.deduccionesservice2.getMontoTotalADeducir().subscribe((montoDeducir) => {
      this.israForm.get('deduccionesPersonales')?.setValue(montoDeducir);
    });
  }

  togglePremios(event: any): void {
    if (event.target.value === 'si') {
      this.israForm.get('montoPremios')?.enable();
    } else {
      this.israForm.get('montoPremios')?.disable();
      this.israForm.patchValue({ montoPremios: 0, impuestoPremios: 0 });
    }
  }

  calcularImpuestoPremios(): void {
    const montoPremios = parseFloat(this.israForm.get('montoPremios')?.value) || 0;
    let impuestoPremios = 0;

    if (montoPremios > 0) {
      impuestoPremios = montoPremios <= 600000 ? montoPremios * 0.01 : montoPremios * 0.06;
    }

    this.israForm.patchValue({ impuestoPremios });
  }

  calcularISR() {
    const ingresosPeriodoanual = parseFloat(this.israForm.get('ingresosPeriodoanual')?.value) || 0;
    const ingresosCopropiedadanual = parseFloat(this.israForm.get('ingresosCopropiedadanual')?.value) || 0;
    const totalIngresosanual = ingresosPeriodoanual + ingresosCopropiedadanual;
    this.israForm.patchValue({ totalIngresosanual, totalIngresosAcumulablesanual: totalIngresosanual });

    const comprasPeriodoanual = parseFloat(this.israForm.get('comprasPeriodoanual')?.value) || 0;
    const totalComprasGastosanual = comprasPeriodoanual;
    this.israForm.patchValue({ totalComprasGastosanual });
    const estimulosFiscales = parseFloat(this.israForm.get('estimulosFiscales')?.value) || 0;
    const perdidasfiscales = parseFloat(this.israForm.get('perdidasfiscales')?.value) || 0;
    const baseGravableanual = totalIngresosanual - totalComprasGastosanual - estimulosFiscales - perdidasfiscales;
    
    // Actualiza la base gravable en el formulario
    const deduccionesPersonales = parseFloat(this.israForm.get('deduccionesPersonales')?.value) || 0;
    const baseGravable = baseGravableanual - deduccionesPersonales;
    this.israForm.patchValue({ baseGravable });

    let isrCausadoanual = 0;
    if (baseGravable > 0) {
      if (baseGravable <= 5000) {
        isrCausadoanual = baseGravable * 0.0192;
      } else if (baseGravable <= 10000) {
        isrCausadoanual = ((baseGravable - 5000) * 0.064) + 96;
      } else if (baseGravable <= 20000) {
        isrCausadoanual = ((baseGravable - 10000) * 0.1088) + 416;
      } else if (baseGravable <= 30000) {
        isrCausadoanual = ((baseGravable - 20000) * 0.16) + 1504;
      } else {
        isrCausadoanual = ((baseGravable - 30000) * 0.21) + 3104;
      }
    }

    const pagosAnterioresanual = parseFloat(this.israForm.get('pagosAnterioresanual')?.value) || 0;
    const isrRetenidoPeriodoanual = parseFloat(this.israForm.get('isrRetenidoPeriodoanual')?.value) || 0;
    const impuestoPremios = parseFloat(this.israForm.get('impuestoPremios')?.value) || 0;
    const isrACargoanual = isrCausadoanual - pagosAnterioresanual - isrRetenidoPeriodoanual + impuestoPremios;

    this.israForm.patchValue({
      isrCausadoanual: isrCausadoanual,
      isrACargoanual: isrACargoanual
    });
  }

  toggleCopropiedad(event: any) {
    if (event.target.value === 'si') {
      this.israForm.get('ingresosCopropiedadanual')?.enable();
    } else {
      this.israForm.get('ingresosCopropiedadanual')?.disable();
      this.israForm.patchValue({ ingresosCopropiedadanual: 0 });
    }
    this.calcularISR();
  }

  

  toggleFacilidades(event: any) {
    this.israForm.get('facilidades')?.setValue(event.target.value);
  }

  toggleCheckbox(item: any) {
    item.seleccionado = !item.seleccionado;
  }

  toggleEstimulos(event: any) {
    this.israForm.get('estimulos')?.setValue(event.target.value);
  }

  openDialog(message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }
}
