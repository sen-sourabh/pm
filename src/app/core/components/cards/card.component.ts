import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardData:
    | {
        title: string;
        count: number;
        icon?: string;
        color?: string;
      }
    | undefined;
}
