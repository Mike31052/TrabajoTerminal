import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { ResicoBD } from '../../shared/models/resicoBD.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResicoHttpService {

  private apiUrl = environment.apiUrl;  // Utiliza la URL del archivo de entorno

  constructor(private http: HttpClient) {}

  addRegistro(resicoBD: ResicoBD): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/resico/addRegistro`, resicoBD);
  }

  getResico(id_usuario: string): Observable<ResicoBD[]> {
    return this.http.get<ResicoBD[]>(`${this.apiUrl}/resico/list/${id_usuario}`);
  }  
}
