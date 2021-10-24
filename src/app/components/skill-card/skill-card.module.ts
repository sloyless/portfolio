import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillCardComponent } from './skill-card';

@NgModule({
  exports: [SkillCardComponent],
  declarations: [
    SkillCardComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class SkillCardModule { }
