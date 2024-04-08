import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  host: {ngSkipHydration: 'true'},
})
export class BookingComponent {

  userForm: FormGroup;
  isFormSubmitted : boolean = false;

  constructor(){
    this.userForm = new FormGroup({
      Name: new FormControl("",[Validators.required]),
      vehicleNumber: new FormControl("",[Validators.required,Validators.maxLength(10)]),
      contactNumber: new FormControl("",[Validators.required,Validators.maxLength(10)]),
      date: new FormControl("",[Validators.required]),
      arrivalTime: new FormControl("", [Validators.required]),
      departureTime: new FormControl("", [Validators.required])
      

    })
  }

  onSubmit(){
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted = true;
  }

}
