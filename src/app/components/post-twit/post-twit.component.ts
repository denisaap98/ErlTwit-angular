import { Component, OnInit, Input } from '@angular/core';
import { Twit } from '../../models/Twit';
import { TwitService } from '../../services/twit.service';

@Component({
  selector: 'app-post-twit',
  templateUrl: './post-twit.component.html',
  styleUrls: ['./post-twit.component.css']
})
export class PostTwitComponent implements OnInit {
  //twits: Twit[];
  twits: any;
  @Input() account:Account;
  constructor(private twitService:TwitService) { }

  ngOnInit() {
    //    this.twitService.getTwits().subscribe(data => {
    //    this.twits = Array.of(data);
    //    console.log(this.twits)
    //  });

  
    
    let twits = [
      {
        User: 'user1',
        Mesaj: 'twit1',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user1',
        Mesaj: 'twit11',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user2',
        Mesaj: 'twit1',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user1',
        Mesaj: 'twit12',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      }

    ]
    localStorage.setItem("twits", JSON.stringify(twits));
    console.log(this.postTwitsbyUser(twits));
    this.twits = this.postTwitsbyUser(twits);
    
  }
   postTwitsbyUser(twits){
     let curr_acc = JSON.parse(localStorage.getItem("current_account"));
     console.log(curr_acc);
     return twits.filter(x => x.User == curr_acc.username)
   }
  submitTwit(twit: Twit){
      this.twitService.submitTwit(twit).subscribe(twit => {
      this.twits.push(twit);
      console.log(twit)
     })
  }

  likeTwit(twit: Twit){
    this.twitService.likeTwit(twit).subscribe(twit => {
      this.twits;
    })
  }



}
