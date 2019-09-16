import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car-service/car.service';
import {FormControl, Validators} from '@angular/forms';
import {ScreenService} from '../../services/screen-service/screen.service';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.sass']
})
export class CalculateComponent implements OnInit {
  selectedCar;
  cars = [];
  cost = null;
  dateFrom: Date = new Date();
  dateTo: Date = new Date();

  public selectFormControl = new FormControl('', [Validators.required]);
  public dateFromFormControl = new FormControl('', [Validators.required]);
  public dateToFormControl = new FormControl('', [Validators.required]);

  constructor(private carService: CarService,
              private screenService: ScreenService) { }

  ngOnInit() {
    this.GetCarsTitle();
    this.cost = null;
  }
  onChange(event){
    this.selectedCar = event;
    this.cost = null;
  }// onChange
  choseOtherCar(){
    this.cost = null;
    const res = document.getElementsByClassName('count-form__res')[0] as HTMLElement;
    const req = document.getElementsByClassName('count-form__req')[0] as HTMLElement;

    res.style.display = 'none';
    req.style.display = 'block';
  }
  async countCost(){

    if (this.selectFormControl.hasError('required')){
      return;
    }// if
    if (this.dateFromFormControl.hasError('required')){
      return;
    }// if
    if (this.dateToFormControl.hasError('required')){
      return;
    }// if
    try{
      const res = await this.carService.countCost(this.selectedCar, this.dateFrom, this.dateTo );
      if(res.data){
        this.cost = res.data;
      }
      else{
        console.log("Ошибка сервера!");
      }
    }
    catch(ex){
      console.log(ex);
    }
  }// countCost

  async GetCarsTitle(){
    const res = await this.carService.getCarsTitle();

    if(res.data){
      this.cars = res.data;

    }
    else{
      console.log("Ошибка сервера!");
    }

  }
}
