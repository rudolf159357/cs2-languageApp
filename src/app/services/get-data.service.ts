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

  // GET
  getHungarianData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/hungarian")
  }

  // CREATE 
  createHungarianData(data: Word): Observable<Word>{
    return this.http.post<Word>(environment.testUrl + "api/create_hungarian_data", data);
  }

  // GET
  getEnglishData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/english")
  }

  // CREATE 
  createEnglishData(data: Word): Observable<Word>{
    return this.http.post<Word>(environment.testUrl + "api/create_english_data", data);
  }

}

