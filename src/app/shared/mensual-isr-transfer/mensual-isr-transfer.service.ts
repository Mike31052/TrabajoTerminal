import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensualIsrTransferService {
  private ingresosPercibidosSource = new BehaviorSubject<number>(0);
  private impuestoCargoSource = new BehaviorSubject<number>(0);
  private cantidadAPagarSource = new BehaviorSubject<number>(0);
  private isrRetenidoSource = new BehaviorSubject<number>(0);

  cantidadAPagar$ = this.cantidadAPagarSource.asObservable();
  isrRetenido$ = this.isrRetenidoSource.asObservable();

  ingresosPercibidos$ = this.ingresosPercibidosSource.asObservable();
  impuestoCargo$ = this.impuestoCargoSource.asObservable();

  updateIngresosPercibidos(value: number): void {
    this.ingresosPercibidosSource.next(value);
  }

  updateImpuestoCargo(value: number): void {
    this.impuestoCargoSource.next(value);
  }

  updateCantidadAPagar(value: number): void {
    this.cantidadAPagarSource.next(value);
  }

  updateIsrRetenido(value: number): void {
    this.isrRetenidoSource.next(value);
  }

  constructor() { }
}
