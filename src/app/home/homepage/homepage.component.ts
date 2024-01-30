import { Component } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  currentMonth: Date = new Date();
  weekdays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  calendarDays: number[] = [];

  constructor() {
    this.generateCalendarDays();
  }

  generateCalendarDays(): void {
    const firstDayOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0
    );

    const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
    const lastDayOfMonthDate = lastDayOfMonth.getDate();

    this.calendarDays = Array.from({ length: firstDayOfWeek }, (_) => 0).concat(
      Array.from({ length: lastDayOfMonthDate }, (_, index) => index + 1)
    );
  }

  prevMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1
    );
    this.generateCalendarDays();
  }

  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1
    );

    this.generateCalendarDays();
  }
}
