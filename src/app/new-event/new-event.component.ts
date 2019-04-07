import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  textareaFocused: boolean = false;
  inputValue: string = '';
  isValid: boolean = false;
  isLoadingOne: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onTextAreaFocused() {
    this.textareaFocused = true;
  }

  onTextAreaBlur() {
    if (!this.inputValue) {
      this.textareaFocused = false;
    }
  }

  onTextAreaChange() {

    if (this.inputValue.length === 0) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  loadOne() {
    this.isLoadingOne = true;
  }

}
