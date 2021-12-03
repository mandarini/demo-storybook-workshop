import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-hoard-katerina',
  templateUrl: './katerina.component.html',
  styleUrls: ['./katerina.component.css'],
})
export class KaterinaComponent {
  @Input() title = 'Hello ng-be';
}
