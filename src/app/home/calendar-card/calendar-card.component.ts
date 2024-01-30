import { Component, Input } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.css',
})
export class CalendarCardComponent {
  @Input() calendarCardDay!: number;
  sampleMeeting: Meeting = {
    id: 1,
    name: 'Party',
    date: new Date('2024-02-03'),
    startTime: { hours: 17, minutes: 0 },
    endtime: { hours: 20, minutes: 0 },
  };
}
