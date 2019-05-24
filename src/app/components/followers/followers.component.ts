import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Routes, RouterModule } from '@angular/router';
import { Follower } from '../../models/Follower';
import { FollowerService } from '../../services/follower.service';
import { Account } from '../../models/Account';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: Observable<Account[]>;
  followers_list: Account[];
  selectedId: number;
  constructor(private route: ActivatedRoute, private service: FollowerService,) { 
    // this.route.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
  
    this.followers = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        console.log(params, "params")
        console.log(this.service.getFollowers(), "din followers")
        localStorage.setItem("followers", JSON.stringify(this.service.getFollowers()))
        return this.service.getFollowers();
      })
    );
    // this.followers = this.service.getFollowers()
    // this.followers
    // .subscribe( data => {
    //    this.followers_list= data;
    // })
    // console.log(this.followers_list[1], "followers_list[1]")
    // this.followers = this.service.getFollowers()
    // this.followers
    // .subscribe( data => {
    //    this.followers_list= data;
    // })

    
   
    // //console.log(this.followers, "followersdin ngOnInit lista")
    // console.log(this.followers_list, "followers_list din ngOnInit lista")
    // localStorage.setItem("followers_list", JSON.stringify(this.followers_list))
    
  }
  }


