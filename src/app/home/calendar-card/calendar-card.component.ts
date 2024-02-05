import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.css',
})
export class CalendarCardComponent implements OnInit {
  @Input() calendarCardDay!: number;
  @Input() calendarCardMonth!: Date;
  todayMeeting!: Meeting;
  sampleMeeting: Meeting = {
    id: 1,
    name: 'Party',
    date: new Date('2024-01-03'),
    startTime: { hours: 17, minutes: 0 },
    endtime: { hours: 20, minutes: 0 },
  };
  ngOnInit(): void {
    this.filterMonth();
  }
  filterMonth(): void {
    if (this.compareMonths(this.calendarCardMonth, this.sampleMeeting.date)) {
      this.todayMeeting = this.sampleMeeting;
    }
  }

  compareMonths(month1: Date, month2: Date): boolean {
    console.log('month1' + month1);
    console.log('month2 ' + month2);
    return (
      month1.getDay === month2.getDay &&
      month1.getMonth() === month2.getMonth() &&
      month1.getFullYear() === month2.getFullYear()
    );
  }
}
