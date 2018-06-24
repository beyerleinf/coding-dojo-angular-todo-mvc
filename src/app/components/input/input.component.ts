import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({selector: 'app-input', templateUrl: './input.component.html', styleUrls: ['./input.component.css']})
export class InputComponent implements OnInit {
  text: string = '';

  @Input() placeholder: string;

  @Input() maxLength: number;

  @Input() buttonEnabled: boolean;

  @Input() buttonText: boolean;

  @Output() submit: EventEmitter<string>;

  constructor() {
    this.submit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.text !== '') {
      this.submit.emit(this.text);
      this.text = '';
    }
  }
}
