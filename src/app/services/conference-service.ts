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

getConferenceById(id:number): Observable<Conference>{
  return this.http.get<Conference>(this.apiUrl+'/'+id);
}

addConference(c:Conference):Observable<Conference>{
  return this.http.post<Conference>(this.apiUrl,c);
}

updateConference(id:number,c:Conference):Observable<Conference>{
  return this.http.put<Conference>(this.apiUrl+"/"+id,c);
}

deleteConference(id:number):Observable<Conference>{
  return this.http.delete<Conference>(this.apiUrl+"/"+id);
}


}
