import { Time } from '@angular/common';

export interface Meeting {
  id?: number;
  name: string;
  color: string;
  date: Date;
  startTime: Time;
  endTime: Time;
}
