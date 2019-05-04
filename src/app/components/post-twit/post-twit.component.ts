import { Component, OnInit } from '@angular/core';
import { Twit } from '../../models/Twit';
import { TwitService } from '../../services/twit.service';

@Component({
  selector: 'app-post-twit',
  templateUrl: './post-twit.component.html',
  styleUrls: ['./post-twit.component.css']
})
export class PostTwitComponent implements OnInit {
  twits: Twit[];
  constructor(private twitService:TwitService) { }

  ngOnInit() {
    this.twitService.getTwits().subscribe(twits => {
      this.twits = twits;
    });
  }

}
