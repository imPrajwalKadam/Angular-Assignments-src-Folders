import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, EmailValidator } from '@angular/forms';
import { ValidationServiceService } from './validation-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AssignmentnoThirteen';
  userForm:any;
  constructor(private formBuilder: FormBuilder)
  {
    this.userForm=this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required], //Validators <- that Service is from Angular
      Email: ['', [Validators.required,ValidationServiceService.emailValidator]],
      phone: ['+91 ',[Validators.required ,ValidationServiceService.PhoneValidation]],
      address: ['', Validators.required],
    });
  }
  saveUser() 
  {
//    if (this.userForm.dirty && this.userForm.valid) 
    {
     alert  (`Firstmame : ${this.userForm.value.FirstName} Lastname : ${this.userForm.value.LastName} email:${this.userForm.value.Email} phone:${this.userForm.value.phone} Address: ${this.userForm.value.address}`);  
    } 
  }

}
