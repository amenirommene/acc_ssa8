import { Component, inject, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';
import { RouterLink } from '@angular/router';
import { ConferenceService } from '../../services/conference-service';
import { toSignal } from '@angular/core/rxjs-interop';


//méta data de la classe
@Component({
  selector: 'app-conference-list',
  //imports array of the components/Pipes/Directives used in the template
  imports: [UpperCasePipe, DatePipe, NgClass, ConferenceDetails, RouterLink], 
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
private confService=inject(ConferenceService);
conferenceSelectionnee : Conference | null = null;
choisirConference(c: Conference){
  this.conferenceSelectionnee = c;
}
reserve(conf:Conference){}

   today = new Date().toISOString().split('T')[0];
 conferences = toSignal(this.confService.getAllConferences());

couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vert';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rouge';
    } else {    
      return 'orange';
    }
  }
 
}
