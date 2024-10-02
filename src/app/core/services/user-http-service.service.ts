import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';  

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private apiUrl = environment.apiUrl;  // Utiliza la URL del archivo de entorno

  constructor(private http: HttpClient) {}

  createUser(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create`, usuario);
  }

  getUser(correo: string, contraseña: string): Observable<any> {
    const body = { correo, contraseña };
    console.log('Enviando datos:', body); 
    return this.http.post<any>(`${this.apiUrl}/user/getUser`, body);
  }
  
}
