import { Component, OnInit } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';
import { MeetingService } from '../../shared/services/meeting.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  meetings: Meeting[] = [];
  currentMonth: Date = new Date();
  weekdays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  calendarDays: number[] = [];

  constructor(private meetingService: MeetingService) {
    this.generateCalendarDays();
  }

  ngOnInit(): void {
    this.meetingService.getMeetings().subscribe({
      next: (allMeetings) => {
        this.meetings = allMeetings;
      },
    });
  }

  generateCalendarDays(): void {
    const firstDayOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1,
    );
    const lastDayOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0,
    );

    const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
    const lastDayOfMonthDate = lastDayOfMonth.getDate();

    this.calendarDays = Array.from({ length: firstDayOfWeek }, () => 0).concat(
      Array.from({ length: lastDayOfMonthDate }, (_, index) => index + 1),
    );
  }

  prevMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
    );
    this.generateCalendarDays();
  }

  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
    );
    this.generateCalendarDays();
  }

  getDayMeetings(day: number): Meeting[] {
    return this.meetings.filter((meeting) =>
      this.isSameDay(new Date(meeting.date), day),
    );
  }

  private isSameDay(day1: Date, day2: number): boolean {
    return (
      day1.getDate() === day2 &&
      day1.getMonth() === this.currentMonth.getMonth()
    );
  }
}
