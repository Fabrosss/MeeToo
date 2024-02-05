import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstLetterDirective } from '../shared/directives/first-letter.directive';

@NgModule({
  declarations: [LoginComponent, FirstLetterDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
