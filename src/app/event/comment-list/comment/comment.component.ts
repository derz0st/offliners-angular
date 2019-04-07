import {Component, Input, OnInit} from '@angular/core';
import {EventComment} from "../../event-comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: EventComment;

  constructor() {
  }

  ngOnInit() {
  }

}
