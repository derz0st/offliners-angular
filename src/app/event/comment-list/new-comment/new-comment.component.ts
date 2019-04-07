import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {EventComment} from "../../event-comment.model";

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewCommentComponent implements OnInit {

  @Output()
  commentCreated: EventEmitter<EventComment> = new EventEmitter<EventComment>();

  constructor() { }

  ngOnInit() {
  }

  saveCommentClicked(textareaValue: string) {
    console.log("Save button clicked")
    console.log(textareaValue);

    let newComment = new EventComment(
      'Denys Kochubei',
      '../../assets/img/logo.gif',
      new Date(),
      textareaValue
    );
    this.commentCreated.emit(newComment);
  }

}
