import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from "../environments/environment";
import {HttpResponse} from "@angular/common/http";

import {Reading} from "./reading";
import {map} from "rxjs/operator/map";


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getAllReadings() {
    return this.http
      .get(API_URL + '/readings/')
      .catch(this.handleError);
  }

  public getReadingById(readingId: number) {
    return this.http
      .get(API_URL + '/readings/' + readingId)
      .catch(this.handleError);
  }

  private handleError(error: HttpResponse<string> | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);

  }
}
