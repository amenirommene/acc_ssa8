import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {
private fb = inject(FormBuilder);
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
}
