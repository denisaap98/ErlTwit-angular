import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
    const twit = {
      twitText: this.twitText
    }
    console.log(twit);
    this.submitTwit.emit(twit);
  }

}
