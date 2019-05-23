import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input('username') username:string;
  constructor(private globals: Globals) { }

  ngOnInit() {
    console.log(this.globals.username, 'from admin');
    console.log(localStorage.getItem("user_login"), "din login")
    console.log(JSON.parse(localStorage.getItem("accounts")), "din login")
  }

}
