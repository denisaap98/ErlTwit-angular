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
       this.twitService.getTwits().subscribe(data => {
       this.twits = Array.of(data);
       console.log(this.twits)
     });

    //  getBooks() 
    //  {
    //    this.isbnsource.getBooks(this.isbn).subscribe(
    //      data => { this.foundBooks = data.json();
    // this.foundBooks = Array.of(this.foundBooks); 
    //       },
    //      err => console.error(err), 
    //      () => console.log('getBooks completed') 
    //      );
    // }

    
  //   this.twits = [
  //     {
  //       User: 'user1',
  //       Mesaj: 'twit1',
  //       Data: '2019',
  //       Likes: '10',
  //       Shares: '2'
  //     }
  //   ]
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
