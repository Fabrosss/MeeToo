import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { CalendarCardComponent } from './home/calendar-card/calendar-card.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { FirstLetterDirective } from './shared/directives/first-letter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CalendarCardComponent,
    PagenotfoundComponent,
    FirstLetterDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, LoginModule, FormsModule],
  exports: [FirstLetterDirective],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
