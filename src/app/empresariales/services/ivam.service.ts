import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IvamService {

  private actualizarivamSource = new BehaviorSubject<number>(0);

  // Método para actualizar el valor de ISR
  setactualizarivam(monto: number) {
    this.actualizarivamSource.next(monto);
  }

  // Método para obtener el valor actualizado de ISR
  getactualizarivam() {
    return this.actualizarivamSource.asObservable();
  }

  constructor() { }
}
