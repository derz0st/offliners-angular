import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithButtonComponent } from './textarea-with-button.component';

describe('TextareaWithButtonComponent', () => {
  let component: TextareaWithButtonComponent;
  let fixture: ComponentFixture<TextareaWithButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaWithButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
