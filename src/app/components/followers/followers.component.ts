import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Routes, RouterModule } from '@angular/router';
import { Follower } from '../../models/Follower';
import { FollowerService } from '../../services/follower.service';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: Observable<Account[]>;
  selectedId: number;
  constructor(private route: ActivatedRoute, private service: FollowerService,) { 
    // this.route.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
    // this.followers = ["follower1", "follower2", "follower3"]
    this.followers = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getFollowers();
      })
    );
    
    console.log(this.followers, "din ngOnInit lista")
  }
  }


