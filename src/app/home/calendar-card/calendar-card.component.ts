import { Component, Input } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.css',
})
export class CalendarCardComponent{
  @Input() calendarCardDay!: number;
  @Input() calendarCardMonth!: Date;
  @Input() dayMeetings!: Meeting[];
  constructor(private router: Router) {}

  meetingDetail(todayMeeting: Meeting) {
    this.router.navigate(['/meeting', todayMeeting.id]);
  }
}
