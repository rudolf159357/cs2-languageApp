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

  getGermanData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/german");
  }

  getHungarianData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/hungarian")
  }

  getEnglishData(): Observable<Word[]>{
    return this.http.get<Word[]>(environment.testUrl + "api/english")
  }

}

