import { Component, OnInit } from '@angular/core';
import {EventComment} from "../event-comment.model";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  private comments: EventComment[];

  constructor() { }

  ngOnInit() {
    this.comments = [];
    this.comments.push(new EventComment('Tanya Bakhtina', '../../assets/img/img2.png', new Date(), 'Comment text'))
  }

  addNewCommentToList(comment: EventComment) {
    this.comments.push(comment);
  }

}
