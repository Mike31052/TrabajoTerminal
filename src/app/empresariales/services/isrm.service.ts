// isrm.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsrmService {
  private actualizarisrmSource = new BehaviorSubject<number>(0);

  // Método para actualizar el valor de ISR
  setactualizarisrm(monto: number) {
    this.actualizarisrmSource.next(monto);
  }

  // Método para obtener el valor actualizado de ISR
  getactualizarisrm() {
    return this.actualizarisrmSource.asObservable();
  }

  constructor() { }
}
