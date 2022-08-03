import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employe } from '../_models/employe';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private apiUrl="http://localhost:8080/api/user"
  constructor(private http:HttpClient) { }

  getEmployes():Observable<employe[]>{
    return this.http.get<employe[]>(`${this.apiUrl}/findall`)
  }
  getemployebyId(id:string):Observable<employe>{
    return this.http.get<employe>(`${this.apiUrl}/${id}`)
  }
  deleteEmploye(id:any):Observable<employe[]>{
    return this.http.delete<employe[]>(`${this.apiUrl}/delete/${id}`)
  }
  updateEmploye(id:any,employe:employe){
    return this.http.put(`${this.apiUrl}/update/${id}`,employe)
  }
  addEmploye(employe:employe){
    return this.http.post(`${this.apiUrl}/addemploye`,employe)
  }

  getallusers():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/findallusers`)
  }
}
