import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}
  convertDate(
    startDate: string,
    endDate: string,
  ): {
    date: string;
    startTime: { hours: number; minutes: number };
    endTime: { hours: number; minutes: number };
  } {
    const dateTimeParts = startDate.split('T');
    const timeStartParts = dateTimeParts[1].split(':');
    const timeEndParts = endDate.split('T')[1].split(':');
    const date = new Date(dateTimeParts[0]);
    const startTime = {
      hours: parseInt(timeStartParts[0]),
      minutes: parseInt(timeStartParts[1]),
    };
    const endTime = {
      hours: parseInt(timeEndParts[0]),
      minutes: parseInt(timeEndParts[1]),
    };
    const isoDate = date.toString();

    return {
      date: isoDate,
      startTime: startTime,
      endTime: endTime,
    };
  }
}
