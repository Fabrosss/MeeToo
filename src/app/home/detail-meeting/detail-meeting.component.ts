import {Component, Input, OnInit} from '@angular/core';
import { Meeting } from '../../shared/interface/meeting';
import {ActivatedRoute, Router} from "@angular/router";
import {MeetingService} from "../../shared/services/meeting.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detail-meeting',
  templateUrl: './detail-meeting.component.html',
  styleUrl: './detail-meeting.component.css'
})
export class DetailMeetingComponent implements OnInit {
  id!: number;
  detailMeeting!: Meeting;
  name = 'placeholder';
  startDateTimeLocalValue!: string;
  endDateTimeLocalValue!: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private meetingService: MeetingService,
              ) {
  }
  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) =>{
      this.id = +params['id']
      this.detailMeeting = this.meetingService.getMeeting(this.id);
      if(this.detailMeeting){
        this.name = this.detailMeeting.name;
        this.updateStartDatetimeLocalValue();
        this.updateEndDatetimeLocalValue();
      }
    })
  }


  onSubmit(): void {
  }
  updateStartDatetimeLocalValue(){
    const formattedDate = this.detailMeeting.date.toString().slice(0, 10); // Format: YYYY-MM-DD
    const formattedTime = `${this.detailMeeting.startTime.hours.toString().padStart(2, '0')}:${this.detailMeeting.startTime.minutes.toString().padStart(2, '0')}`; // Format: HH:MM
    this.startDateTimeLocalValue = `${formattedDate}T${formattedTime}`;
  }
  updateEndDatetimeLocalValue(){
    const formattedDate = this.detailMeeting.date.toString().slice(0, 10); // Format: YYYY-MM-DD
    const formattedTime = `${this.detailMeeting.endTime.hours.toString().padStart(2, '0')}:${this.detailMeeting.endTime.minutes.toString().padStart(2, '0')}`; // Format: HH:MM
    this.endDateTimeLocalValue = `${formattedDate}T${formattedTime}`;
  }
}
