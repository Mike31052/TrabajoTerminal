import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeduccionesAsalariado } from '../../shared/models/deducciones-sueldos.model';
import { TipoDeduccion } from '../../shared/models/tipo-deduccion.enum';
declare var bootstrap: any;

@Component({
  selector: 'app-add-deduccion',
  templateUrl: './add-deduccion.component.html',
  styleUrls: ['./add-deduccion.component.css']
})
export class AddDeduccionComponent {
  tipoDeduccion: number;  // Cambia el tipo a number
  descripcion: string = '';
  rfcEmisor: string = '';
  importeTotal: number = 0;
  nombreRazonSocial: string = '';
  montoDeducible: number = 0;
  fechaEmision: string = '';
  cantidadRecuperada: number = 0;
  formaPago: string = '';
  mensaje: string = '';
  tippoAlert: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddDeduccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tipoDeduccion: number }
  ) {
    this.tipoDeduccion = data.tipoDeduccion;
  }

  ngOnInit() {
    this.setMensajePorTipoDeduccion(this.tipoDeduccion);
  }

  ngAfterViewInit() {
    const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
      new bootstrap.Popover(popoverTriggerEl);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getTipoDeduccionTexto(tipo: number): string {
    return TipoDeduccion[tipo] || 'Tipo de deducción desconocido';
  }

  onSave(): void {
    const nuevaDeduccion: DeduccionesAsalariado = {
      tipo_deduccion: this.tipoDeduccion,
      descripcion: this.descripcion,
      rfc_emisor: this.rfcEmisor,
      importe: this.importeTotal,
      empresa: this.nombreRazonSocial,
      deducible: this.montoDeducible,
      fecha_emision: new Date(this.fechaEmision),
    };

    this.dialogRef.close(nuevaDeduccion);
  }

  private setMensajePorTipoDeduccion(tipo: number): void {
    switch (tipo) {
      case TipoDeduccion.Honorarios_Medicos:
        this.mensaje = 'Esta deducción está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" NO puede superar ese tope, el fundamento legal es el: Art. 151 fraccion I primer párrafo LISR.';
        break;
      case TipoDeduccion.Gastos_Medicos_Incapacidad:
        this.mensaje = 'Esta deducción NO está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" SI puede superar ese tope, el fundamento legal es el: Art. 151 fraccion I tercer párrafo LISR.';
        this.tippoAlert = true;
        break;
      case TipoDeduccion.Gastos_Funerales:
        this.mensaje = 'Esta deducción está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" NO puede superar ese tope, el fundamento legal es el: Art. 151 fraccion III primer párrafo LISR.';
        break;
      case TipoDeduccion.Donativos:
        this.mensaje = 'Esta deducción está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" NO puede superar ese tope, el fundamento legal es el: Art. 151 fraccion III LISR.';
        break;
      case TipoDeduccion.Intereses_Reales:
        this.mensaje = 'Esta deducción está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" NO puede superar ese tope, el fundamento legal es el: Art. 151 fraccion IV LISR.';
        break;
      case TipoDeduccion.Aportaciones_Voluntarias:
        this.mensaje = 'Esta deducción NO está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" SI puede superar ese tope, el fundamento legal es el: Art. 151 fraccion V LISR.';
        this.tippoAlert = true;
        break;
      case TipoDeduccion.Seguros_Gastos_Medicos:
        this.mensaje = 'Esta deducción está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" NO puede superar ese tope, el fundamento legal es el: Art. 151 fraccion VI LISR.';
        break;
      case TipoDeduccion.Transportacion_Escolar:
        this.mensaje = 'Esta deducción está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" NO puede superar ese tope, el fundamento legal es el: Art. 151 fraccion VII LISR.';
        break;
      case TipoDeduccion.Depositos_Cuentas_Ahorro:
        this.mensaje = 'Esta deducción NO está sujeta al "Monto total deducible", por lo que el campo "Monto deducible" SI puede superar ese tope, el fundamento legal es el: Art. 185 LISR.';
        this.tippoAlert = true;
        break;
      case TipoDeduccion.Colegios:
        this.mensaje = 'Esta deducción NO está sujeta al "Monto total deducible", los limites del "Monto deducible" son: Preescolar: $14,200, Primaria: $12,900, Secundaria: $19,100, Profesional Técnico: $17,100, Bachillerato o su equivalente: $24,500';
        this.tippoAlert = true;
        break;
      default:
        this.mensaje = 'Tipo de deducción desconocido';
        break;
    }
  }
  
}
