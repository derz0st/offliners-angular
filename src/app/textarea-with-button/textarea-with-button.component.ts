import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textarea-with-button',
  templateUrl: './textarea-with-button.component.html',
  styleUrls: ['./textarea-with-button.component.css']
})
export class TextareaWithButtonComponent implements OnInit {
  @Input() textareaClass: string;
  @Input() textareaPlaceholder: string;

  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  private textareaFocused: boolean = false;
  private inputValue: string = '';
  private isValid: boolean = false;
  private isLoadingOne: boolean = false;

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

  onSaveButtonClick() {
    this.buttonClicked.emit(this.inputValue);
    this.inputValue = '';
    this.isValid = false;
    this.textareaFocused = false;
  }

}
