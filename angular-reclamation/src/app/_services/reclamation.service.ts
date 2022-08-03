import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reclamation } from '../_models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl="http://localhost:8080/api/reclamation"
  constructor(private http:HttpClient) { }

  getReclamations():Observable<reclamation[]>{
    return this.http.get<reclamation[]>(`${this.apiUrl}/findall`)
  }
  getOneReclamation(id:any){
    return this.http.get<reclamation>(`${this.apiUrl}/findone/${id}`)
  }
  deletereclamation(id:any):Observable<reclamation[]>{
    return this.http.delete<reclamation[]>(`${this.apiUrl}/delete/${id}`)
  }
  addreclamation(reclamation:any){
    return this.http.post(`${this.apiUrl}/addreclamation`,reclamation)
  }
}
