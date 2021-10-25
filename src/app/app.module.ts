import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioCardModule } from './components/portfolio-card/portfolio-card.module';
import { SkillTabItemModule } from './components/skill-tab-item/skill-tab-item.module';
import { SkillCardModule } from './components/skill-card/skill-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PortfolioCardModule,
    SkillTabItemModule,
    SkillCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
