// isra.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsraService {
  private actualizarisraSource = new BehaviorSubject<number>(0);

  // Método para actualizar el valor de ISR
  setactualizarisra(monto: number) {
    this.actualizarisraSource.next(monto);
  }

  // Método para obtener el valor actualizado de ISR
  getactualizarisra() {
    return this.actualizarisraSource.asObservable();
  }

  constructor() { }
}
