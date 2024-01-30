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

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomepageComponent, CalendarCardComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
