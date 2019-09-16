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
  static ResName(res){
    return res;
  }
  getGaleryCars(): Promise<ServerResponse>{

    return this.http.get(`${ApiRoutes.GALERY_CARS_INFO}`).toPromise() as Promise<ServerResponse>;
  }// getGaleryCars
  getCarsTitle(): Promise<ServerResponse>{
    return this.http.get(`${ApiRoutes.CARS_TITLE}`).toPromise() as Promise<ServerResponse>;
  }// getCarsTitle
  countCost(carTitle: number, from: Date, to: Date ){
    console.log(carTitle, from, to);
    return { data: 590};
  }// countCost


}
