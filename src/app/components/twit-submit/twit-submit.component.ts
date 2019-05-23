import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { Twit } from '../../models/Twit';

@Component({
  selector: 'app-twit-submit',
  templateUrl: './twit-submit.component.html',
  styleUrls: ['./twit-submit.component.css']
})
export class TwitSubmitComponent implements OnInit {
  @Output() submitTwit: EventEmitter<any> = new EventEmitter();
  twitText: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("onSubmit()");
    // const twit = {
    //   twitText: this.twitText
    // }
    
    const twit: Twit = {
      User: "User",
      Mesaj: this.twitText,
      Data: "2019",
      Likes: "0",
      Shares: "0"

    }
    console.log(this.twitText);
    this.submitTwit.emit(twit);
  }

}
