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
    this.saveToLocalStorage();
  }
  getMeetings(): Observable<Meeting[]>{
    return this.http.get<Meeting[]>('http://localhost:3000/meetings').pipe(
      tap((Meetings:Meeting[]) =>{
        this._meetings = Meetings;
      })
    );
  }
  getMeeting(index: number): Meeting{
    return this._meetings[index -1];
  }
  addMeeting(newMeeting: Meeting): void {
    this._meetings.push(newMeeting);
    this.postMeeting(newMeeting).subscribe({
      error: (err) => console.log("Wystąpił błąd: "+err)
    });
    this.saveToLocalStorage();
    this.meetingChanged.next(this.meetings);
  }
  postMeeting(postMeeting : Omit<Meeting, "id">): Observable<Meeting> {
    return this.http.post<Meeting>('http://localhost:3000/meetings', postMeeting)
  }
  changeMeeting(changeMeeting: Meeting, index: number){
    this._meetings[index] = changeMeeting;
    this.saveToLocalStorage();
    this.editMeeting(changeMeeting, index).subscribe({
      error: (err) =>{console.log("Wystąpił błąd edycji" +err);}
    });
    this.meetingChanged.next(this.meetings);
  }
  saveToLocalStorage(){
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('meetings', JSON.stringify(this.meetings));
    }
  }
  editMeeting(editMeeting: Meeting, index: number) : Observable<any>{
    return this.http.patch(`http://localhost:3000/meetings/${index}`, editMeeting);
  }
  getMeetingFromCache(id: number): Meeting | undefined {
    if (typeof localStorage !== 'undefined') {
      const meetings = JSON.parse(localStorage.getItem('meetings') || '[]') as Meeting[];
      return meetings.find(meeting => meeting.id === id);
    } else {
      return undefined;
    }
  }
  deleteMeeting(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/meetings/${id}`);
  }
}
