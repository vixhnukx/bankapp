import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno = ''
  uname = ''
  psw = ''


  constructor(private ds: DataService, private router:Router) {



  }

  register() {

    var acno = this.acno
    var uname = this.uname
    var psw = this.psw

    const result = this.ds.register(acno, uname, psw)

    if (result) {
      alert("registration success")
      this.router.navigateByUrl('')
    }
    else {
      alert("user already exist")
      this.router.navigateByUrl('')


    }

  }

}
