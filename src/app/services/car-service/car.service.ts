import { Injectable } from '@angular/core';
import {ApiRoutes} from '../../models/ApiRoutes';
import {HttpClient} from '@angular/common/http';
import {ServerResponse} from '../../models/ServerResponse';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  cars;
  getGaleryCars() {

    this.http.get(`${ApiRoutes.GALERY_CARS_INFO}`).subscribe(response => { return response });


  }
}
