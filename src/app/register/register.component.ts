import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno=''
  uname=''
  psw=''


  constructor(){

  }
  register(){

    var acno=this.acno
    var uname=this.uname
    var psw=this.psw

  }
}
