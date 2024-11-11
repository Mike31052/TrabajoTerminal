import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-isrm',
  templateUrl: './isrm.component.html',
  styleUrls: ['./isrm.component.css']
})
export class IsrmComponent {
  isrmForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) {
    this.isrmForm = this.fb.group({
      copropiedad: ['no', Validators.required],
      ingresosCopropiedad: [{ value: 0, disabled: true }],
      ingresosPeriodo: [0, Validators.required],
      totalIngresos: [{ value: 0, disabled: true }],
      totalIngresosAcumulables: [{ value: 0, disabled: true }],
      comprasPeriodo: [0, Validators.required],
      totalComprasGastos: [0, Validators.required],
      facilidades: ['no', Validators.required],
      utilidades: [0, Validators.required],
      baseGravable: [{ value: 0, disabled: true }],
      isrCausado: [{ value: 0, disabled: true }],
      estimulos: ['no', Validators.required],
      pagosAnteriores: [0, Validators.required],
      isrRetenidoPeriodo: [0, Validators.required],
      impuestoRetenido: [{ value: 0, disabled: true }],
      isrACargo: [{ value: 0, disabled: true }],
    });
  }

  calcularISR() {
    const ingresosPeriodo = parseFloat(this.isrmForm.get('ingresosPeriodo')?.value) || 0;
    const ingresosCopropiedad = parseFloat(this.isrmForm.get('ingresosCopropiedad')?.value) || 0;
    const totalIngresos = ingresosPeriodo + ingresosCopropiedad;
    this.isrmForm.patchValue({ totalIngresos, totalIngresosAcumulables: totalIngresos });

    const comprasPeriodo = parseFloat(this.isrmForm.get('comprasPeriodo')?.value) || 0;
    const totalComprasGastos = comprasPeriodo;
    this.isrmForm.patchValue({ totalComprasGastos });
    
    const baseGravable = totalIngresos - totalComprasGastos;
    this.isrmForm.patchValue({ baseGravable });

    let isrCausado = 0;
    if (baseGravable > 0) {
      if (baseGravable <= 5000) {
        isrCausado = baseGravable * 0.0192;
      } else if (baseGravable <= 10000) {
        isrCausado = ((baseGravable - 5000) * 0.064) + 96;
      } else if (baseGravable <= 20000) {
        isrCausado = ((baseGravable - 10000) * 0.1088) + 416;
      } else if (baseGravable <= 30000) {
        isrCausado = ((baseGravable - 20000) * 0.16) + 1504;
      } else {
        isrCausado = ((baseGravable - 30000) * 0.21) + 3104;
      }
    }

    const pagosAnteriores = parseFloat(this.isrmForm.get('pagosAnteriores')?.value) || 0;
    const isrRetenidoPeriodo = parseFloat(this.isrmForm.get('isrRetenidoPeriodo')?.value) || 0;
    const isrACargo = isrCausado - pagosAnteriores - isrRetenidoPeriodo;

    this.isrmForm.patchValue({
      isrCausado: isrCausado,
      isrACargo: isrACargo
    });

    // Navegamos a `pagom` y pasamos el valor de `isrACargo`
    this.router.navigate(['/pagom', { isrACargo }]);
  }

  toggleCopropiedad(event: any) {
    if (event.target.value === 'si') {
      this.isrmForm.get('ingresosCopropiedad')?.enable();
    } else {
      this.isrmForm.get('ingresosCopropiedad')?.disable();
      this.isrmForm.patchValue({ ingresosCopropiedad: 0 });
    }
    this.calcularISR();
  }

  toggleFacilidades(event: any) {
    this.isrmForm.get('facilidades')?.setValue(event.target.value);
  }

  toggleCheckbox(item: any) {
    item.seleccionado = !item.seleccionado;
  }

  toggleEstimulos(event: any) {
    this.isrmForm.get('estimulos')?.setValue(event.target.value);
  }

  openDialog(message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: { message }
    });
  }
}
