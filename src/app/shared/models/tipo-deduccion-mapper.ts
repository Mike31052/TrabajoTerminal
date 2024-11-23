import { TipoDeduccion } from "./tipo-deduccion.enum";

export const tipoDeduccionMap: { [key: string]: TipoDeduccion } = {
    'Honorarios médicos, dentales y gastos hospitalarios': TipoDeduccion.HonorariosMedicos,
    'Gastos médicos por incapacidad o discapacidad': TipoDeduccion.GastosMedicosIncapacidad,
    'Gastos funerales': TipoDeduccion.GastosFunerales,
    'Donativos': TipoDeduccion.Donativos,
    'Intereses reales': TipoDeduccion.InteresesReales,
    'Aportaciones voluntarias y planes personales de retiro': TipoDeduccion.AportacionesVoluntarias,
    'Primas por seguros de gastos médicos': TipoDeduccion.SegurosGastosMedicos,
    'Transportación escolar': TipoDeduccion.TransportacionEscolar,
    'Depósitos en cuentas especiales para el ahorro': TipoDeduccion.DepositosCuentasAhorro,
    'Colegios': TipoDeduccion.Colegios
  };
  