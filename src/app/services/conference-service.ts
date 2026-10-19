import { inject, Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  private http=inject(HttpClient);
apiUrl="http://localhost:3000/conferences";
getAllConferences() {
    return this.http.get(this.apiUrl).subscribe() ;
  }




}
