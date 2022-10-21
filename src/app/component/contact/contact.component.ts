import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactGroup:FormGroup
  name:FormControl
  email:FormControl
  phone:FormControl
  subject:FormControl
  message:FormControl

  contact: Contact |undefined

  constructor(private fb: FormBuilder) { 
    this.name=this.fb.control("",[Validators.required,Validators.minLength(3)])
    this.email=this.fb.control("",[Validators.required,Validators.email])
    this.phone=this.fb.control("",Validators.required)
    this.subject=this.fb.control("",[Validators.required,Validators.minLength(6)])
    this.message=this.fb.control("",Validators.minLength(20))

    this.contactGroup=fb.group({
      name:this.name,
      email:this.email,
      phone:this.phone,
      subject:this.subject,
      message:this.message,
    })
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  handleSubmit(){
    this.contact = {
      email : this.email.value,
      name:this.name.value,
      subject: this.subject.value,
      phone: this.phone.value,
      message: this.message.value

    }
    console.log((this.contact));
    
    alert("message envoyé")
  }
}
