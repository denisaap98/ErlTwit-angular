import { Component, OnInit, Input } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import{ FollowerService } from '../../services/follower.service';
import{ Follower } from '../../models/Follower';
import { Twit } from '../../models/Twit';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  @Input() account: Account;
  // follower: Observable<Account>;
  follower: Account;
  twits: Twit[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: FollowerService) { }

  ngOnInit() {
    // // this.follower = this.route.paramMap.pipe(
    // //   switchMap((params: ParamMap) =>
    // //     this.service.getFollower(params.get('id')))
       
    // );
    // let current_follower
    // this.follower
    // .subscribe( follower => {
    //     current_follower = follower;
    // })
    // localStorage.setItem("current_follower", JSON.stringify(this.follower))
    // this.twits = this.postTwitsbyUser();
    this.getFollower();
    this.twits = this.postTwitsbyUser(this.follower);
   
  }

  getFollower(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getFollower(id).subscribe(foll => this.follower  = foll)
  }
  gotoFollowers(follower: Account) {
    let followerId = follower ? follower.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/followers', { id: followerId}]);
  }
  postTwitsbyUser(follower){
    this.twits = JSON.parse(localStorage.getItem("twits"));
    let current_follower
    // this.follower
    // .subscribe( follower => {
    //     current_follower = follower;
    // })
    console.log(this.twits, "TWITS")
    console.log(follower, "FOLLOWER")
    return this.twits.filter(x => x.User == follower.username)
  }

}
