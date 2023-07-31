import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './challenges/highlight-directive/highlight.directive';
import { ReactiveFormsChallengeComponent } from './challenges/reactive-forms-val/reactive-forms-challenge.component';
import { ReactiveFormsChallengeModule } from './challenges/reactive-forms-val/reactive-forms-challenge.module';
import { ReusableErrorMessageComponent } from './challenges/error-message-component/reusable-error-message.component';
import { ReusableErrorMessageModule } from './challenges/error-message-component/reusable-error-message.module';
import { DataBindingChallengeComponent } from './challenges/two-way-data-binding/data-binding-challenge.component';
import { DataBindingChallengeModule } from './challenges/two-way-data-binding/data-binding-challenge.module';
import { CssChallengesComponent } from './challenges/css-challenges/css-challenges.component';
import { CssChallengesModule } from './challenges/css-challenges/css-challenges.module';
import { MaskPipe } from './challenges/custom-pipe/mask.pipe';
import { DataDisplayComponent } from './challenges/general-challenges/data-display/data-display.component';
import { DataDisplayModule } from './challenges/general-challenges/data-display/data-display.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ReactiveFormsChallengeComponent,
    ReusableErrorMessageComponent,
    DataBindingChallengeComponent,
    CssChallengesComponent,
    MaskPipe,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsChallengeModule,
    ReusableErrorMessageModule,
    DataBindingChallengeModule,
    CssChallengesModule,
    DataDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
