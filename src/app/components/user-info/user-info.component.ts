import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/Account';
import { AccountService } from '../../services/account.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  accounts: Account[];
  username: string;
  constructor(private globals: Globals) { }//(private accountService:AccountService) { }

  ngOnInit() {
    // this.accountService.getAccounts().subscribe(data => {
    //   this.accounts = Array.of(data);
    // });
    this.accounts = [
      {
        id: 0,
        username : "denisaandreea",
        name: "Denisa",
        data: "22.05.2019",
        followers: ["user1", "user2","user3", "user4"],
        following: []
      },
      {
        id: 1,
        username : "user1",
        name:"User1",
        data: "25.05.2019",
        followers: ["user3, denisaandreea"],
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
        data: "19.04.2019",
        followers: ["user1"],
        following: []
      },
      {
        id: 4,
        username : "user4",
        name:"User4",
        data: "01.01.2019",
        followers: ["user1", "user3"],
        following: []
      }
    ];
    this.username = localStorage.getItem("user_login");
    this.getUserbyUsername();
    console.log(localStorage.getItem("current_account"), "USER INFO CURRENT_ACCOUNT")
   }
   getUserbyUsername(){
     let acc =  this.accounts.find(x => x.username === this.username);
     console.log(acc);
     localStorage.setItem("current_account", JSON.stringify(acc))
     localStorage.setItem("accounts", JSON.stringify(this.accounts))
   }
   followUser(){
     
   }

}
