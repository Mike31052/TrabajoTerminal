import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDeduccionComponent } from '../add-deduccion/add-deduccion.component';
import { DeduccionesAsalariado } from '../../shared/models/deducciones-sueldos.model';
import { tipoDeduccionMap } from '../../shared/models/tipo-deduccion-mapper';

@Component({
  selector: 'app-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.css']
})
export class DeduccionesComponent {
  montoPorDeducir: number = 310;
  deduccionesPersonales: DeduccionesAsalariado[] = [];
  deducciones: { 
    title: string; 
    iconClass: string; 
    count: number; 
    data: DeduccionesAsalariado[]; 
  }[] = [
    { title: 'Honorarios médicos, dentales y gastos hospitalarios', iconClass: 'fas fa-stethoscope', count: 0, data: [] },
    { title: 'Gastos médicos por incapacidad o discapacidad', iconClass: 'fas fa-wheelchair', count: 0, data: [] },
    { title: 'Gastos funerales', iconClass: 'fas fa-cross', count: 0, data: [] },
    { title: 'Donativos', iconClass: 'fas fa-hand-holding-heart', count: 0, data: [] },
    { title: 'Intereses reales', iconClass: 'fas fa-percentage', count: 0, data: [] },
    { title: 'Aportaciones voluntarias y planes personales de retiro', iconClass: 'fas fa-piggy-bank', count: 0, data: [] },
    { title: 'Primas por seguros de gastos médicos', iconClass: 'fas fa-file-medical', count: 0, data: [] },
    { title: 'Transportación escolar', iconClass: 'fas fa-bus', count: 0, data: [] },
    { title: 'Depósitos en cuentas especiales para el ahorro', iconClass: 'fas fa-university', count: 0, data: [] },
    { title: 'Colegios', iconClass: 'fas fa-school', count: 0, data: [] }
  ];
  

  // Datos prellenados
  dataInicial: DeduccionesAsalariado[] = [
    {
      id_deducción: 1,
      tipo_deduccion: 1,
      rfc_emisor: 'ABC123456789',
      empresa: 'Hospital X',
      fecha_emision: new Date('2024-11-01'),
      descripcion: 'Consulta médica general',
      importe: 1200,
      deducible: 1000
    },
    {
      id_deducción: 2,
      tipo_deduccion: 10,
      rfc_emisor: 'DEF987654321',
      empresa: 'Colegio Y',
      fecha_emision: new Date('2024-10-15'),
      descripcion: 'Pago colegiatura mes octubre',
      importe: 5000,
      deducible: 4500
    },
    {
      id_deducción: 3,
      tipo_deduccion: 1,
      rfc_emisor: 'GHI123456789',
      empresa: 'Clínica Z',
      fecha_emision: new Date('2024-09-10'),
      descripcion: 'Cirugía menor',
      importe: 8000,
      deducible: 7000
    }
  ];

  selectedDeduccion: any = null;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // Contar y asignar datos prellenados a cada deducción según su tipo
    this.deducciones.forEach((deduccion, index) => {
      deduccion.data = this.dataInicial.filter(
        (item) => item.tipo_deduccion === index + 1
      );
      deduccion.count = deduccion.data.length;
    });
  }

  selectDeduccion(deduccion: any) {
    this.selectedDeduccion = deduccion;
  }

  addDeduccion() {
    // Mapeamos el title de la deducción al tipo de deducción correspondiente en el enum
    const tipoDeduccion = tipoDeduccionMap[this.selectedDeduccion?.title];
    
    // Abrimos el diálogo con el tipo de deducción correcto
    const dialogRef = this.dialog.open(AddDeduccionComponent, {
      data: { tipoDeduccion: tipoDeduccion }
    });
  
    dialogRef.afterClosed().subscribe((result: DeduccionesAsalariado | undefined) => {
      if (result) {
        // Buscamos la deducción seleccionada y agregamos la nueva deducción
        const targetDeduccion = this.deducciones.find(
          (ded) => ded.title === this.selectedDeduccion.title
        );
        if (targetDeduccion) {
          targetDeduccion.data.push(result);
          targetDeduccion.count++;
        }
      }
    });
  }
  
  

  // Método para eliminar una deducción
  eliminarDeduccion(index: number): void {
    const confirmation = confirm("¿Estás seguro de que deseas eliminar esta deducción?");
    if (confirmation) {
      // Eliminar el item del arreglo 'data' en la deducción seleccionada
      this.selectedDeduccion.data.splice(index, 1);
      // Actualizar el contador de deducciones para esta categoría
      this.selectedDeduccion.count = this.selectedDeduccion.data.length;
    }
  }
  
}
