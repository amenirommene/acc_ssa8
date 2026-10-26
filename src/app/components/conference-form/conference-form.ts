import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConferenceService } from '../../services/conference-service';
import { Conference } from '../../models/conference';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {
private fb = inject(FormBuilder);
 private router = inject(Router);
myForm2 = this.fb.group({
  title : ['',[Validators.required, Validators.minLength(10)]],
    description : ['', Validators.required],
    date : [],
    nbMax : [],
    place : []

})


  myForm : FormGroup = new FormGroup({
    title : new FormControl('',[Validators.required, Validators.minLength(10)]),
    description : new FormControl('', Validators.required),
    date : new FormControl(),
    nbMax : new FormControl(),
    place : new FormControl()
  })

get Title(){
  return this.myForm.get('title');
}
isValid = computed(() => this.myFormStatus() === 'VALID');
myFormValue=toSignal(this.myForm.valueChanges, {initialValue:this.myForm.value});
myFormStatus=toSignal(this.myForm.statusChanges, {initialValue:this.myForm.status});
private confs = inject(ConferenceService);
onSubmit(){
 /* const confData : Conference = {
    id:0,
    title:this.myForm.value.title ?? '',
    description: this.myForm.value.description ?? '',
     date: this.myForm.value.date ?? '',
      maxParticipants: this.myForm.value.nbMax ?? 0,
      place: this.myForm.value.place ?? '',
      nbParticipants: 0,

  }
  this.confs.addConference(confData).subscribe(()=>this.router.navigateByUrl('/conferences'));
*/
const confData = computed<Conference>(() => {
  return {
  id:0,
    title:this.myFormValue().title ?? '',
    description: this.myFormValue().description ?? '',
     date: this.myFormValue().date ?? '',
      maxParticipants: this.myFormValue().nbMax ?? 0,
      place: this.myFormValue().place ?? '',
      nbParticipants: 0,
}});
 this.confs.addConference(confData()).subscribe(()=>this.router.navigateByUrl('/conferences'));
  }
constructor(){
  effect(() => {
  console.log(this.myFormValue());
  console.log(this.myFormStatus());
});
}
}
