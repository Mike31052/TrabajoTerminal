import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { EmpresarialBD } from '../../shared/models/empresarialBD.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresarialService {
  private apiUrl = environment.apiUrl;  // Utiliza la URL del archivo de entorno

  constructor(private http: HttpClient) {}

  addRegistro(empresarialBD: EmpresarialBD): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/empresarial/addRegistro`, empresarialBD);
  }

  getEmpresarial(id_usuario: string): Observable<EmpresarialBD[]> {
    return this.http.get<EmpresarialBD[]>(`${this.apiUrl}/empresarial/list/${id_usuario}`);
  }  
}
