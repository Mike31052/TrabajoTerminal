import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SueldosService {
  private ingresoAnualSource = new BehaviorSubject<number>(0); // Valor inicial: 0
  ingresoAnual$ = this.ingresoAnualSource.asObservable();

  private ingresoAcumulableSource = new BehaviorSubject<number>(0); // Valor inicial: 0
  ingresoAcumulable$ = this.ingresoAcumulableSource.asObservable();

  private deduccionesPersonalesSource = new BehaviorSubject<number>(0); // Valor inicial: 0
  deduccionesPersonales$ = this.deduccionesPersonalesSource.asObservable();

  constructor() {}

  setIngresoAnual(value: number) {
    this.ingresoAnualSource.next(value);
  }

  setIngresoAcumulable(value: number) {
    this.ingresoAcumulableSource.next(value);
  }

  setDeduccionesPersonales(value: number) {
    this.deduccionesPersonalesSource.next(value);
  }
}
