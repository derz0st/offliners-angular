import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {SearchComponent} from './header-bar/search/search.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {ContentContainerComponent} from './content-container/content-container.component';
import {NewEventComponent} from './new-event/new-event.component';
import {ProfileComponent} from './profile/profile.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {EventComponent} from './event/event.component';
import {EventStatisticsComponent} from './event/event-statistics/event-statistics.component';
import {CommentListComponent} from './event/comment-list/comment-list.component';
import {CommentComponent} from './event/comment-list/comment/comment.component';
import {NewCommentComponent} from './event/comment-list/new-comment/new-comment.component';
import {TextareaWithButtonComponent} from './textarea-with-button/textarea-with-button.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SearchComponent,
    MenuBarComponent,
    ContentContainerComponent,
    NewEventComponent,
    ProfileComponent,
    StatisticsComponent,
    EventComponent,
    EventStatisticsComponent,
    CommentListComponent,
    CommentComponent,
    NewCommentComponent,
    TextareaWithButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
