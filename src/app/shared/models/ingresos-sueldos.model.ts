export class IngresosAsalariado {  
    id_ingreso?: number;
    id_usuario?: string;
    rfc?: string;
    empresa?: string;
    confirmacion?: boolean;
    ingresoGravable?: number;
    //sueldos y salarios
    ingresoAnual?: number;
    ingresoExento?: number;
    subsidioEmpleo?: number;
    retencionISR?: number;
    aguinaldo?: number;
    primaVacacional?: number;
    ptu?: number;
    primaDominical?: number;
    otrosIngresos?: number;
    //asimilados     
    ingresoAnualas?: number;
    retencionISRas?: number;
  }
  