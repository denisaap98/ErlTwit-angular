import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Twit } from '../../models/Twit';
import { TwitService } from '../../services/twit.service';


@Component({
  selector: 'app-twit-item',
  templateUrl: './twit-item.component.html',
  styleUrls: ['./twit-item.component.css']
})
export class TwitItemComponent implements OnInit {
  @Input() twit: Twit;
  current_account: Account;
  constructor() { }

  ngOnInit() {
    this.current_account = JSON.parse(localStorage.getItem("current_account"));
  }

}
