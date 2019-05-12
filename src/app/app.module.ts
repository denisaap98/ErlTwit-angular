import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostTwitComponent } from './components/post-twit/post-twit.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TwitSubmitComponent } from './components/twit-submit/twit-submit.component';
import { TwitItemComponent } from './components/twit-item/twit-item.component';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { UserInfoItemComponent } from './components/user-info-item/user-info-item.component';


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
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
