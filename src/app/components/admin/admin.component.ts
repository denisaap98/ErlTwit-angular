import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';
import { Account } from '../../models/Account';
import { Twit } from '../../models/Twit';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input('username') username:string;
  followers_list: Account[];
  twits: Twit[];
  twits2: Twit[];
  accounts: Account[];
  constructor(private globals: Globals) { }

  ngOnInit() {
    console.log(this.globals.username, 'from admin');
    console.log(localStorage.getItem("user_login"), "din login")
    console.log(JSON.parse(localStorage.getItem("accounts")), "din login")
    console.log(JSON.parse(localStorage.getItem("followers")), "Lista followers");
    this.followers_list = JSON.parse(localStorage.getItem("followers_list"))
    this.twits = JSON.parse(localStorage.getItem("twits"))
  
    this.accounts = [
      {
        id: 1,
        username : "user1",
        name: "User1",
        data: "22.05.2019",
        followers: ["user3", "user2","user3", "user4"],
        following: []
      },
      {
        id: 2,
        username : "user2",
        name:"User2",
        data: "22.05.2019",
        followers: ["user3"],
        following: []
      },
      {
        id: 3,
        username : "user3",
        name:"User3",
        data: "22.05.2019",
        followers: ["user1"],
        following: []
      },
      {
        id: 4,
        username : "user4",
        name:"User4",
        data: "22.05.2019",
        followers: ["user1", "user3"],
        following: []
      }
    ];
    console.log(this.followers_list, "LISTA FOLLOWERS ADMIN")
    console.log(this.twits, "LISTA TWITS ADMIN")

  }
}
