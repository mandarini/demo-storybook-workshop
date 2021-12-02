import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-hoard-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Input() bgcolor = '#00ff00';
  @Input() btntext = 'Click me';
  @Input() disabled = false;
}
