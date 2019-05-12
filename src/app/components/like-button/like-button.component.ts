import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Twit } from 'src/app/models/Twit';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  @Output() likeTwit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  onLike(twit){
    twit.likes = twit.likes + 1;
    this.likeTwit.emit(twit);

  }
}
