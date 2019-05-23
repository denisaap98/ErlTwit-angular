import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-user-info-item',
  templateUrl: './user-info-item.component.html',
  styleUrls: ['./user-info-item.component.css']
})
export class UserInfoItemComponent implements OnInit {
  username: string;
  current_account: Account;
  constructor(private globals: Globals) { }

  ngOnInit() {
    
    this.current_account = JSON.parse(localStorage.getItem("current_account"));
    console.log(this.current_account)
    console.log(localStorage.getItem("user_login"), "din user-item")

  }
  followAccount(account: Account){
   // this.accountService.followAccount(account).subscribe(account => {
   // console.log(account)
   //})
   
}
}
