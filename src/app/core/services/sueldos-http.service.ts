import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { SueldosBD } from '../../shared/models/sueldosDB.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SueldosHttpService {
  private apiUrl = environment.apiUrl;  // Utiliza la URL del archivo de entorno

  constructor(private http: HttpClient) {}

  addRegistro(sueldosBD: SueldosBD): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sueldos/addRegistro`, sueldosBD);
  }

  getSueldos(id_usuario: string): Observable<SueldosBD[]> {
    return this.http.get<SueldosBD[]>(`${this.apiUrl}/sueldos/list/${id_usuario}`);
  }  

}
