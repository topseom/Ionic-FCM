import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  form:FormGroup;
  constructor(public auth:AngularFireAuth,public formBuilder:FormBuilder,public navCtrl: NavController) {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  onSubmit(){
    let data = this.form.value;
    this.auth.auth.sendPasswordResetEmail(data.email)
    .then(status=>{
      alert("send success!");
    }).catch(err=>{
      alert(err.message);
    });
  }



}
