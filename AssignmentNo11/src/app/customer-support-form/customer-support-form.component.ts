import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-support-form',
  templateUrl: './customer-support-form.component.html',
  styleUrls: ['./customer-support-form.component.css']
})
export class CustomerSupportFormComponent implements OnInit {

  constructor(public fobj:FormBuilder) { }

  AtharvaForm:any = this.fobj.group({

   username:['',[Validators.required,Validators.minLength(5)] ],
   Password:['',Validators.required],
   confirmPass:[''],
   PrajwalClass : this.fobj.group({
    batch:[''],
    fees:['']
  })
  });

  setData()
  {
    this.AtharvaForm.setValue({
      
    })
  }

  ngOnInit(): void {
  }
}
