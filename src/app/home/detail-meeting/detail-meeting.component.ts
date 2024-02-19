import { Component, OnInit } from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingService } from '../../shared/services/meeting.service';
import { DateService } from '../../shared/services/date.service';

@Component({
  selector: 'app-detail-meeting',
  templateUrl: './detail-meeting.component.html',
  styleUrl: './detail-meeting.component.css',
})
export class DetailMeetingComponent implements OnInit {
  id!: number;
  detailMeeting!: Meeting | undefined;
  name = 'placeholder';
  startDateTimeLocalValue!: string;
  endDateTimeLocalValue!: string;
  color!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private meetingService: MeetingService,
    private dateService: DateService,
  ) {}
  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.detailMeeting = this.meetingService.getMeetingFromCache(this.id);
      if (!this.detailMeeting) {
        this.meetingService.getMeetings().subscribe((meetings) => {
          this.detailMeeting = meetings.find(
            (meeting) => meeting.id === this.id,
          );
          if (this.detailMeeting) {
            this.name = this.detailMeeting.name;
            this.color = this.detailMeeting.color;
            this.updateStartDatetimeLocalValue();
            this.updateEndDatetimeLocalValue();
          }
        });
      } else {
        this.name = this.detailMeeting.name;
        this.color = this.detailMeeting.color;
        this.updateStartDatetimeLocalValue();
        this.updateEndDatetimeLocalValue();
      }
    });
  }

  onSubmit(): void {
    const date = this.dateService.convertDate(
      this.startDateTimeLocalValue,
      this.endDateTimeLocalValue,
    );
    this.detailMeeting = {
      name: this.name,
      color: this.color,
      startTime: date.startTime,
      endTime: date.endTime,
      date: new Date(date.date),
    };
    if (this.detailMeeting) {
      console.log(this.detailMeeting);
      this.meetingService.changeMeeting(this!.detailMeeting, this.id);
      this.router.navigate(['home']);
    }
  }
  updateStartDatetimeLocalValue() {
    const formattedDate = this.detailMeeting!.date.toString().slice(0, 10); // Format: YYYY-MM-DD
    const formattedTime = `${this.detailMeeting!.startTime.hours.toString().padStart(2, '0')}:${this.detailMeeting!.startTime.minutes.toString().padStart(2, '0')}`; // Format: HH:MM
    this.startDateTimeLocalValue = `${formattedDate}T${formattedTime}`;
  }
  updateEndDatetimeLocalValue() {
    const formattedDate = this.detailMeeting!.date.toString().slice(0, 10); // Format: YYYY-MM-DD
    const formattedTime = `${this.detailMeeting!.endTime.hours.toString().padStart(2, '0')}:${this.detailMeeting!.endTime.minutes.toString().padStart(2, '0')}`; // Format: HH:MM
    this.endDateTimeLocalValue = `${formattedDate}T${formattedTime}`;
  }
  deleteMeeting() {
    this.meetingService.deleteMeeting(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['home']);
      },
    });
  }
}
