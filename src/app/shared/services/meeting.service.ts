import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";
import {Meeting} from "../interface/meeting";

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private _meetings: Meeting[] = [];
  meetingChanged = new Subject<Meeting[]>();
  constructor(private http: HttpClient) {}

  public get meetings(){
    return this._meetings.slice();
  }
  public set meetings(arrMeetings: Meeting[]){
    this._meetings = [...arrMeetings];
    this.meetingChanged.next(this.meetings);
  }
  getMeetings(): Observable<Meeting[]>{
    return this.http.get<Meeting[]>('http://localhost:3000/meetings').pipe(
      tap((Meetings:Meeting[]) =>{
        this.meetings = Meetings;
      })
    );
  }
  getMeeting(index: number): Meeting{
    return this.meetings[index -1];
  }
  addMeeting(newMeeting: Meeting): void {
    this._meetings.push(newMeeting);
    this.saveToLocalStorage();
    this.meetingChanged.next(this.meetings);
  }
  changeMeeting(changeMeeting: Meeting, index: number){
    this._meetings[index] = changeMeeting;
    this.saveToLocalStorage();
    this.meetingChanged.next(this.meetings);
  }
  saveToLocalStorage(){
    localStorage.setItem('meetings', JSON.stringify(this.meetings));
  }
}
