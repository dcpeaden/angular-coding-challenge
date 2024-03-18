import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableErrorMessageComponent } from './reusable-error-message.component';

@NgModule({
  declarations: [ReusableErrorMessageComponent],
  imports: [CommonModule],
  exports: [ReusableErrorMessageComponent],
})
export class ReusableErrorMessageModule {}
