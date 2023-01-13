import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patrimonio } from '../models/patrimonio';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  url : string = 'http://localhost:8080/api/patrimonio';

  constructor(private http : HttpClient) { }

  getPatrimonio(): Observable<Patrimonio[]>{
    return this.http.get<Patrimonio[]>(this.url+'/list');
  }

  insertPatrimonio(patrimonio:Patrimonio):Observable<Patrimonio>{
    return this.http.post<Patrimonio>(this.url+'/insert',  patrimonio);
  }

  listPatrimonio(id:number): Observable<Patrimonio>{
    return this.http.get<Patrimonio>(this.url+'/'+id);
  }


  updatePatrimonio(colaborador:Patrimonio):Observable<Patrimonio>{
    return this.http.put<Patrimonio>(this.url+'/update/'+colaborador.id, colaborador);
  }

  deletePatrimonio(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'/delete/'+id);
  }
}
 