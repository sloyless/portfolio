import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolio-card.html',
  styleUrls: ['./portfolio-card.scss']
})
export class PortfolioCardComponent {
  @Input() item: any = [];
}
