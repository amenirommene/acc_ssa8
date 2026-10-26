import { inject, Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
private http=inject(HttpClient);
apiUrl="http://localhost:3000/conferences";
getAllConferences():Observable<Conference[]>{
    return this.http.get<Conference[]>(this.apiUrl) ;
  }




}
