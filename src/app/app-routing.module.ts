import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddNewMeetingComponent } from './home/add-new-meeting/add-new-meeting.component';
import { DetailMeetingComponent } from './home/detail-meeting/detail-meeting.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'meeting/:id',
    component: DetailMeetingComponent,
    title: 'Szczegóły spotkania.',
  },
  {
    path: 'addNewMeeting',
    component: AddNewMeetingComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    component: PagenotfoundComponent,
    title: 'Page Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
