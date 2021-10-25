import { Component, Input } from '@angular/core';
import { AboutTabs, Skill, PortfolioCard } from '../../app.models';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.html',
  styleUrls: ['./skill-card.scss']
})
export class SkillCardComponent {
  @Input() skill: any = [];
}
