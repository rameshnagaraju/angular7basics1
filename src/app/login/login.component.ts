import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn=true;
  Username: string;
  Password: string;

  constructor() { }

  ngOnInit() {
  }

  showAlertFn(){
    console.log("Click Handler was called" );
    this.isLoggedIn = !(this.isLoggedIn);
    console.log(this.Username);
  }

}
