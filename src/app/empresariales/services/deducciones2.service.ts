// empresariales/deducciones2.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Deducciones2Service {
  private montoTotalPorDeducirSource = new BehaviorSubject<number>(0);
  private montoTotalPorDeduciranualSource = new BehaviorSubject<number>(0);

  constructor() { }

  setMontoTotalPorDeducir(monto: number) {
    this.montoTotalPorDeducirSource.next(monto);
  }

  setMontoTotalPorDeduciranual(monto: number) {
    this.montoTotalPorDeduciranualSource.next(monto);
  }

  getMontoTotalADeducir() {
    return this.montoTotalPorDeducirSource.asObservable();
  }

  getMontoTotalADeduciranual() {
    return this.montoTotalPorDeduciranualSource.asObservable();
  }
}
