import { Injectable } from '@angular/core';
import { Follower } from '../models/Follower';
import { FOLLOWERS } from '../MockFollowers';
import { Account } from '../models/Account';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor() { }
  getFollowers(): Observable<Account[]> {
    // return of(FOLLOWERS);
    // accs.filter(x => x.username == followers[i])
   let accs = JSON.parse(localStorage.getItem("accounts"));
   let acc = JSON.parse(localStorage.getItem("current_account"));
   let followers = acc.followers
   console.log(followers, "followers din service")
   let followersAcc = [];
   let k = 0
   for(let i = 0; i < followers.length; i++){
    followersAcc.push(accs.find(x => x.username == followers[i]));
   }
  
   return of(followersAcc);
   }

  getFollower(id: number | string) {
    console.log(this.getFollowers(),"getFollowers() din service")
    return this.getFollowers().pipe(
      // (+) before `id` turns the string into a number
      map((followersAcc: Account[]) => followersAcc.find(follower => follower.id === id))
    );
  }
}

