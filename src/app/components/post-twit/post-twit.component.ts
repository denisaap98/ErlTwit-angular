import { Component, OnInit, Input } from '@angular/core';
import { Twit } from '../../models/Twit';
import { TwitService } from '../../services/twit.service';

@Component({
  selector: 'app-post-twit',
  templateUrl: './post-twit.component.html',
  styleUrls: ['./post-twit.component.css']
})
export class PostTwitComponent implements OnInit {
  twits: Twit[];
  @Input() account:Account;
  constructor(private twitService:TwitService) { }

  ngOnInit() {
    // this.twitService.getTwits().subscribe(twits => {
    //   this.twits = twits;
    // });
    this.twits = [
      {
        user: 'user1',
        mesaj: 'twit1',
        data: '2019',
        likes: 10,
        shares: 2
      },
      {
        user: 'user2',
        mesaj: 'twit2',
        data: '2019',
        likes: 10,
        shares: 2
      }
    ]
  }


  submitTwit(twit: Twit){
      this.twitService.submitTwit(twit).subscribe(twit => {
      this.twits.push(twit);
     })
   
  }

  likeTwit(twit: Twit){
    this.twitService.likeTwit(twit).subscribe(twit => {
      this.twits;
    })
  }



}
