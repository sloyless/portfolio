import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioCardComponent } from './portfolio-card';

@NgModule({
  exports: [PortfolioCardComponent],
  declarations: [
    PortfolioCardComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class PortfolioCardModule { }
