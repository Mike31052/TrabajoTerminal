import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensualIvaTransferService {
  private impuestoCargoSource = new BehaviorSubject<number>(0);
  private cantidadAPagarSource = new BehaviorSubject<number>(0);

  cantidadAPagar$ = this.cantidadAPagarSource.asObservable();
  impuestoCargo$ = this.impuestoCargoSource.asObservable();

  updateImpuestoCargo(value: number): void {
    this.impuestoCargoSource.next(value);
  }

  updateCantidadAPagar(value: number): void {
    this.cantidadAPagarSource.next(value);
  }

  constructor() { }
}
