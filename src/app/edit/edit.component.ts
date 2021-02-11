import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { WeekDay } from '../models/weekDay.model';
import { WeekDayService } from '../services/weekday.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  options = [true, false];
  days = new WeekDay([], null, null);

  constructor(private WeekDayService: WeekDayService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.days.Date.push(form.value.Date1);
    this.days.Date.push(form.value.Date2);
    this.days.Date.push(form.value.Date3);
    this.days.Date.push(form.value.Date4);
    this.days.Date.push(form.value.Date5);
    this.days.Date.push(form.value.Date6);
    this.days.Date.push(form.value.Date7);
    this.days.DayOfWeek = form.value.DayOfWeek;
    this.days.IsOptionalSent = form.value.IsOptionalSent;
    this.WeekDayService.submitWeekDays(this.days.Date).subscribe((data:any) =>{
      window.alert("Dates Submitted Successfully")
      console.log(data);
    })
  }
}
