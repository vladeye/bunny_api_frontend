import { Component, OnInit } from '@angular/core';
import {Reading} from "./reading";
import {BunnyService} from "./bunny-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Readings App';
  readings: any[] = [];
  selectedReading: any;
  isDarkTheme = false;

  constructor(private bunnyService: BunnyService){}


  public ngOnInit() {
    this.bunnyService.getAllReadings()
        .subscribe(readings => {
      this.readings = readings;
      console.log(this.readings.length);
      if(this.readings.length > 0) {
        this.selectedReading = readings[0];
      }
    })
  }


}
