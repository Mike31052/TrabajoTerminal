import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnualTransferService {
  private ingresosGravadosSource = new BehaviorSubject<number>(0);
  private impuestoACargoSource = new BehaviorSubject<number>(0);
  private isrRetenidoSource = new BehaviorSubject<number>(0);
  private cantidadAPagarSource = new BehaviorSubject<number>(0);

  cantidadAPagar$ = this.cantidadAPagarSource.asObservable();
  ingresosGravados$ = this.ingresosGravadosSource.asObservable();
  impuestoACargo$ = this.impuestoACargoSource.asObservable();
  isrRetenido$ = this.isrRetenidoSource.asObservable();

  updateIngresosGravados(value: number): void {
    this.ingresosGravadosSource.next(value);
  }

  updateImpuestoACargo(value: number): void {
    this.impuestoACargoSource.next(value);
  }

  updateIsrRetenido(value: number): void {
    this.isrRetenidoSource.next(value);
  }

  updateCantidadAPagar(value: number): void {
    this.cantidadAPagarSource.next(value);
  }

  constructor() { }
}
