import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {
  url = 'https://6571bcfed61ba6fcc0136808.mockapi.io/Student'
  constructor(private _http:HttpClient){}  
  
  getAll(){
    return this._http.get(this.url)
  }
}
