import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user=new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    pnumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
  })
}
