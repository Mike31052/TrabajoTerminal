// src/app/services/user-sesion.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSesionService {
  private readonly USER_KEY = 'user_sesion';

  setUsuario(data: any) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(data));
  }

  getUsuario() {
    const usuarioData = localStorage.getItem(this.USER_KEY);
    return usuarioData ? JSON.parse(usuarioData) : null;
  }

  clearUsuario() {
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return this.getUsuario() !== null;
  }
}
