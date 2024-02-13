import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.css',
})
export class CalendarCardComponent implements OnInit {
  @Input() calendarCardDay!: number;
  @Input() calendarCardMonth!: Date;
  @Input() dayMeetings!: Meeting[];
  constructor(private router: Router) {}
  ngOnInit(): void {
    if(this.dayMeetings.length > 0){
      console.log(this.dayMeetings[0].startTime.hours);
    }
  }

  meetingDetail(todayMeeting: Meeting) {
    this.router.navigate(['/meeting', todayMeeting.id]);
  }
}
