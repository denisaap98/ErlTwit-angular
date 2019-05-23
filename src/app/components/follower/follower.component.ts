import { Component, OnInit, Input } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import{ FollowerService } from '../../services/follower.service';
import{ Follower } from '../../models/Follower';
import { Twit } from '../../models/Twit';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  @Input() account: Account;
  follower: Observable<Account>;
  twits: Twit[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: FollowerService) { }

  ngOnInit() {
    this.follower = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getFollower(params.get('id')))
    );
    console.log(this.follower, "ngOnInit din follower")
    //localStorage.setItem("current_follower", JSON.stringify(this.follower))
  }
  gotoFollowers(follower: Account) {
    let followerId = follower ? follower.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', { id: followerId}]);
  }
  postTwitsbyUser(){
    this.twits = JSON.parse(localStorage.getItem("twits"));
    let current_follower
    this.follower
    .subscribe( follower => {
        current_follower = follower;
    })
    return this.twits.filter(x => x.User == current_follower.username)
  }

}
