import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEventComponent } from './add-new-meeting.component';

describe('AddNewEventComponent', () => {
  let component: AddNewEventComponent;
  let fixture: ComponentFixture<AddNewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
