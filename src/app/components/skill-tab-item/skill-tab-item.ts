import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-tab-item',
  templateUrl: './skill-tab-item.html',
  styleUrls: ['./skill-tab-item.scss']
})
export class SkillTabItemComponent {
  @Input() item: any = [];
}
