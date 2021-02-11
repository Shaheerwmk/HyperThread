import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeekDay } from '../models/weekDay.model';
import { WeekDayService } from '../services/weekday.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  weekDay: WeekDay;
  constructor(private http: HttpClient, private WeekDayService: WeekDayService, private route:Router) { }

  ngOnInit(): void {
    this.WeekDayService.getWeekDays().subscribe((data:WeekDay)=>{
      this.weekDay = data;
    });
  }
}
