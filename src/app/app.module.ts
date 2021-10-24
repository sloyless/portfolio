import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkillTabItemModule } from './components/skill-tab-item/skill-tab-item.module';
import { SkillCardModule } from './components/skill-card/skill-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SkillTabItemModule,
    SkillCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
