import { Component, OnInit, Output, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from '../../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  constructor(private Auth: AuthService, private router: Router, private globals: Globals) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    this.username = target.querySelector('#username').value
    localStorage.setItem("user_login", this.username);
    this.globals.username = this.username
    const password = target.querySelector('#password').value
    console.log(this.username, password)
    this.router.navigate(['admin'])
    // this.Auth.getUserDetails(username, password).subscribe(data => {
    //   console.log(data)
    // })
  }

}
