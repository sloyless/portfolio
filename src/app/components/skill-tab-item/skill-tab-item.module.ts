import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillTabItemComponent } from './skill-tab-item';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [SkillTabItemComponent],
  declarations: [
    SkillTabItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
})
export class SkillTabItemModule { }
