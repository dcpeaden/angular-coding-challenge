import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <input type="text" [value]="value" (input)="updateValue($event.target.value)">
  `
})
export class CustomInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  updateValue(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
