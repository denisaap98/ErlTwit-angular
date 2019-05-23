import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() account:Account;
  @Input() follower:Account;
  @Output() followButton:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onFollow(){
    // this.account.following.push(this.follower.username);
    // this.follower.followers.push(this.account.username);
    // this.followButton.emit(this.account);
    // this.followButton.emit(this.follower)
    let current_acc = JSON.parse(localStorage.getItem("current_account"))
    let current_foll = JSON.parse(localStorage.getItem("current_follower"))
    current_acc.following.push("follower_nou")
   // current_foll.followers.push(current_acc.username)
    console.log(current_acc)
    console.log(current_foll)
    this.followButton.emit(current_acc);
    //this.followButton.emit(current_foll)
  }

}
