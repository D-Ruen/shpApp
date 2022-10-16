import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs-compat/operator/last';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // firstname:string =""
  // lastname:string=""
  // email:string=""
  // password:string=""
  // confirmPassword:string=""
  // listFirstname:string[]=[]

  user : User ={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    passwordConfirm:""
  }
    signupForm:FormGroup;
    firstname:FormControl;
    lastname:FormControl;
    email:FormControl;
    password:FormControl;
    passwordConfirm:FormControl;
  constructor(private fb:FormBuilder) {

    this.firstname=this.fb.control("",[Validators.required]);
    this.lastname=this.fb.control("",[Validators.required]);
    this.email=this.fb.control("",[Validators.required,Validators.email]);
    this.password=this.fb.control("",[Validators.required,Validators.minLength(6)])
    this.passwordConfirm= this.fb.control("",[Validators.required])
    
    this.signupForm=fb.group({
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      passwordConfirm:this.passwordConfirm,

    })
  }

  ngOnInit(): void {
    
    
    
  }


  handleSubmit(){
    console.log("User :", this.user)
  }
  // saveName(){
  //   if(this.firstname){
  //     this.listFirstname.push(this.firstname)
  //     this.firstname=""
  //   }    
  // }
  // deleteName(index:number){
  //   if (index>=0){
  //     this.listFirstname.splice(index,1)
  //   }
  // }
  // update(index:number){
  //   if(index>=0){
  //     const name=this.listFirstname[index]
  //     this.listFirstname.splice(index,1);
  //     this.firstname=name


  //   }
  // }
}
