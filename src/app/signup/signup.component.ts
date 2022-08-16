import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../body/data.service';
import { getDatabase, ref, push, set } from "firebase/database";
import { FirebaseApp } from '@angular/fire/app';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  data:any
  hide = true

  constructor(private fb: FormBuilder,public datasvc : DataService ,public router:Router,firebase:FirebaseApp) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
      password: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
      rememberMe: [true]
  })
  }
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get rememberMe() { return this.form.get('rememberMe') }

  signup(){
    const db = getDatabase();
    const postListRef = ref(db, 'username');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        "account":this.username.value,
        "password":this.password.value
    });
    this.router.navigate(['/signin'])

  }



}
