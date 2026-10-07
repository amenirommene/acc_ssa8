import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [FormsModule],
  templateUrl: './conferencedetails.html',
  styleUrl: './conferencedetails.css',
})
export class ConferenceDetails {
   // PROSIT 2 : données sous forme de Signals.
  titre = signal('Découvrir Angular 21');
  intervenant = signal('Ahmed Ben Salah');
  dateEvenement = signal('20 septembre 2026');
  placesDisponibles = signal(3);
  message = signal('');

  // Informations supplémentaires utilisées quand une conférence est sélectionnée.
  description = signal('');
  lieu = signal('');
  estSelectionnee = signal(false);

 conferencee: Conference | null = null;
 //@Input() conference: Conference | null = null;
 @Input()
 set conference(value: Conference | null) {
    if (value) {
      this.titre.set(value.title);
      this.dateEvenement.set(value.date);
      this.placesDisponibles.set(value.maxParticipants - value.nbParticipants);
      this.description.set(value.description);
      this.lieu.set(value.place);
      this.estSelectionnee.set(true);
      this.message.set('');
    }
  }
/*
    
//variable classique
  titree: string = 'Conference Details';
  //définir un signal

confName = signal('Conference Details');

  f() {
    alert ("onjour, vous êtes inscrit à la conférence");
  }*/
 changerTitre(t:any) {
  }

  inscrire(){}

}
