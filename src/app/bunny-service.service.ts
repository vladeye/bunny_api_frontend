import { Injectable } from '@angular/core';
import { ApiService } from "./api-service.service";
import {Observable} from "rxjs/Observable";
import {Reading} from "./reading";

@Injectable()
export class BunnyService {

  constructor(private api: ApiService) { }

  // Simulate GET /readings
  getAllReadings(): Observable<Reading[]> {
    return this.api.getAllReadings();
  }


  // Simulate GET /readings/:id
  getReadingById(readingId: number): Observable<Reading> {
    return this.api.getReadingById(readingId);
  }

}
