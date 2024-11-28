import { TipoDeduccion } from "./tipo-deduccion.enum";

export const tipoDeduccionMap: { [key: string]: TipoDeduccion } = {
    'Honorarios médicos, dentales y gastos hospitalarios': TipoDeduccion.Honorarios_Medicos,
    'Gastos médicos por incapacidad o discapacidad': TipoDeduccion.Gastos_Medicos_Incapacidad,
    'Gastos funerales': TipoDeduccion.Gastos_Funerales,
    'Donativos': TipoDeduccion.Donativos,
    'Intereses reales': TipoDeduccion.Intereses_Reales,
    'Aportaciones voluntarias y planes personales de retiro': TipoDeduccion.Aportaciones_Voluntarias,
    'Primas por seguros de gastos médicos': TipoDeduccion.Seguros_Gastos_Medicos,
    'Transportación escolar': TipoDeduccion.Transportacion_Escolar,
    'Depósitos en cuentas especiales para el ahorro': TipoDeduccion.Depositos_Cuentas_Ahorro,
    'Colegios': TipoDeduccion.Colegios
  };
  