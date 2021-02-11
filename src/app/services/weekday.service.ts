import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeekDay } from '../models/weekDay.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WeekDayService {
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  getWeekDays(){
    return this.http.get("http://testapi.hyperthread.in/api/WeekDay");
  }

  submitWeekDays(dates: Date[]): Observable<any>{
    //   var getDaysArray = function(start, end) {
    //     for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
    //         arr.push(new Date(dt));
    //     };
    //     return arr;
    // };
    // var daylist = getDaysArray(new Date("2018-05-01"),new Date("2018-07-01"));
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.http.post("http://testapi.hyperthread.in/api/WeekDay", {Dates: dates}, {headers: headers});
  }
}