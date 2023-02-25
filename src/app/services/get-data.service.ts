import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../models/wordModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  // GET
  getGermanData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/german");
  }

  // CREATE 
  createGermanData(data: Word): Observable<Word>{
    return this.http.post<Word>(environment.testUrl + "api/create_german_data", data);
  }

  // DELETE
  deleteGermanData(value: Word): Observable<Word> {
    const url = `${environment.testUrl}api/delete_german_data/${value.id}`
    return this.http.delete<Word>(url);
  }

  // UPDATE
  updateGermanData(value: Word): Observable<Word> {
    return this.http.put<Word>(environment.testUrl + "api/update_german_data", value);
  }

  // GET
  getHungarianData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/hungarian")
  }

  // CREATE 
  createHungarianData(data: Word): Observable<Word>{
    return this.http.post<Word>(environment.testUrl + "api/create_hungarian_data", data);
  }

   // DELETE
   deleteHungarianData(value: Word): Observable<Word> {
    const url = `${environment.testUrl}api/delete_hungarian_data/${value.id}`
    return this.http.delete<Word>(url);
  }

  // GET
  getEnglishData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/english")
  }

  // CREATE 
  createEnglishData(data: Word): Observable<Word>{
    return this.http.post<Word>(environment.testUrl + "api/create_english_data", data);
  }

   // DELETE
   deleteEnglishData(value: Word): Observable<Word> {
    const url = `${environment.testUrl}api/delete_english_data/${value.id}`
    return this.http.delete<Word>(url);
  }

}

