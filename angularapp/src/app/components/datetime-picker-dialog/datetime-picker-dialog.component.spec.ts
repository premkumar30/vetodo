import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimePickerDialogComponent } from './datetime-picker-dialog.component';

describe('DatetimePickerDialogComponent', () => {
  let component: DatetimePickerDialogComponent;
  let fixture: ComponentFixture<DatetimePickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimePickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
