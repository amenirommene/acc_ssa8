import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  myForm : FormGroup = new FormGroup({
    title : new FormControl('',[Validators.required, Validators.minLength(10)]),
    description : new FormControl('', Validators.required),
    date : new FormControl(),
    nbMax : new FormControl(),
    place : new FormControl()
  })


}
