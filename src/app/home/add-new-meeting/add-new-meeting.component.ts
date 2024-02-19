import { Component } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';
import { DateService } from '../../shared/services/date.service';
import { MeetingService } from '../../shared/services/meeting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-meeting.component.html',
  styleUrl: './add-new-meeting.component.css',
})
export class AddNewMeetingComponent {
  id!: number;
  detailMeeting!: Meeting | undefined;
  name = '';
  startDateTimeLocalValue = '';
  endDateTimeLocalValue = '';
  color: string = '#ffffff';
  constructor(
    private dateService: DateService,
    private meetingService: MeetingService,
    private router: Router,
  ) {}
  onSubmit() {
    const finalDateObject = this.dateService.convertDate(
      this.startDateTimeLocalValue,
      this.endDateTimeLocalValue,
    );
    this.detailMeeting = {
      date: new Date(finalDateObject.date),
      endTime: finalDateObject.endTime,
      startTime: finalDateObject.startTime,
      color: this.color,
      name: this.name,
    };
    this.meetingService.addMeeting(this.detailMeeting);
    this.router.navigate(['/home']);
  }
}
