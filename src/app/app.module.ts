import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//import { Http, Headers } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostTwitComponent } from './components/post-twit/post-twit.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TwitSubmitComponent } from './components/twit-submit/twit-submit.component';
import { TwitItemComponent } from './components/twit-item/twit-item.component';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { UserInfoItemComponent } from './components/user-info-item/user-info-item.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { InterceptorService } from './services/interceptor.service';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowerComponent } from './components/follower/follower.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
import { Globals } from './globals';



@NgModule({
  declarations: [
    AppComponent,
    PostTwitComponent,
    UserInfoComponent,
    NavBarComponent,
    HeaderComponent,
    TwitSubmitComponent,
    TwitItemComponent,
    LikeButtonComponent,
    UserInfoItemComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    FollowersComponent,
    FollowerComponent,
    FollowButtonComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path:'',
        component: HomeComponent
      },
      // {
      //   path:'followers',
      //   component: FollowersComponent
      // },
      // {
      //   path:'followers/:follower',
      //   component: FollowersComponent
      // }
      { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
      { path: 'followers', redirectTo: '/superheroes' },
      { path: 'follower/:id', redirectTo: '/follower/:id' },
      { path: 'superheroes',  component: FollowersComponent, data: { animation: 'followers' } },
      { path: 'follower/:id', component: FollowerComponent, data: { animation: 'followers' } }

    ]  
    )
  ],
  providers: [ Globals ],//[{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
