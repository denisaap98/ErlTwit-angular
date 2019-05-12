import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/Account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  accounts: Account[];
  constructor() { }//(private accountService:AccountService) { }

  ngOnInit() {
    // this.accountService.getAccounts().subscribe(accounts => {
    //   this.accounts = accounts;
    // });
    this.accounts = [
      {
        id: 1,
        username : "user1",
        data: "4.05.2019"
      }
    ];
  }

}
