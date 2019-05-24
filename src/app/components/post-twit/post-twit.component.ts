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
        User: 'denisaandreea',
        Mesaj: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet. Curabitur aliquet orci sit amet est posuere consectetur.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'denisaandreea',
        Mesaj: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'denisaandreea',
        Mesaj: 'Nam quis justo in augue auctor imperdiet. Curabitur aliquet orci sit amet est posuere consectetur.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'denisaandreea',
        Mesaj: ':)',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'denisaandreea',
        Mesaj: 'Fusce nec leo ut massa viverra venenatis. Nam accumsan libero a elit aliquet quis ullamcorper arcu tincidunt. Praesent purus turpis, consectetur quis congue vel, pulvinar at lorem.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'denisaandreea',
        Mesaj: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'denisaandreea',
        Mesaj: 'Nam quis justo in augue auctor imperdiet. Curabitur aliquet orci sit amet est posuere consectetur.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user1',
        Mesaj: ':)',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user1',
        Mesaj: 'Fusce nec leo ut massa viverra venenatis. Nam accumsan libero a elit aliquet quis ullamcorper arcu tincidunt. Praesent purus turpis, consectetur quis congue vel, pulvinar at lorem.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user1',
        Mesaj: 'Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user2',
        Mesaj: ':)',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user2',
        Mesaj: 'Fusce nec leo ut massa viverra venenatis. Nam accumsan libero a elit aliquet quis ullamcorper arcu tincidunt. Praesent purus turpis, consectetur quis congue vel, pulvinar at lorem.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user2',
        Mesaj: 'Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user3',
        Mesaj: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet. Curabitur aliquet orci sit amet est posuere consectetur.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user3',
        Mesaj: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user3',
        Mesaj: 'Nam quis justo in augue auctor imperdiet. Curabitur aliquet orci sit amet est posuere consectetur.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user3',
        Mesaj: ':)',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },
      {
        User: 'user3',
        Mesaj: 'Fusce nec leo ut massa viverra venenatis. Nam accumsan libero a elit aliquet quis ullamcorper arcu tincidunt. Praesent purus turpis, consectetur quis congue vel, pulvinar at lorem.',
        Data: '2019',
        Likes: '10',
        Shares: '2'
      },

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
