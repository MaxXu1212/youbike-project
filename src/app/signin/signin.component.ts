import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../body/data.service';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  comparison:boolean = false

  hide = true

  account : any
  public form: FormGroup;
  constructor( private fb: FormBuilder,public datasvc : DataService ,public router:Router) { }

  ngOnInit() {
      this.form = this.fb.group({
          username: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
          password: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
          rememberMe: [true]
      })
      this.account=new Array
      this.datasvc.getaccount().subscribe((result:any)=>{
        Object.keys(result.username).forEach((k:any)=>{
          this.account.push(JSON.parse(JSON.stringify(result.username[`${k}`])))
        })
      })



  }
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get rememberMe() { return this.form.get('rememberMe') }



  signin() {
    this.account.forEach(value => {
      if (value.account === this.username.value && value.password === this.password.value){
        this.comparison = true
      }
    });
      if (this.comparison === true){
        this.router.navigate(['/body'])
        } else{
          alert("帳號密碼錯誤")
        }
  }












}
