import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car-service/car.service';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {ScreenService} from '../../services/screen-service/screen.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass']
})
export class GaleryComponent implements OnInit, AfterViewChecked{
  public cars;
  public slides;
  public currentSlide = 0;
  trustedDashboardUrl : SafeUrl;
  constructor(private carService: CarService,
              private sanitizer: DomSanitizer,
              private screenService: ScreenService) {

  }



  ngOnInit() {
    this.GetGaleryCars();

  }

  async GetGaleryCars(){
    const res = await this.carService.getGaleryCars();

    if(res.data){
      this.cars = res.data;

    }
    else{
      console.log("Ошибка сервера!");
    }

  }

  NextSlide() {
    this.slides[this.currentSlide].className = 'galery__slide';
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].className = 'galery__slide galery__slide-showing';


  }
  getUrl(url){

    this.trustedDashboardUrl =  this.sanitizer.bypassSecurityTrustUrl( 'url("' + url + '")');
    const arr = this.trustedDashboardUrl.toString().split(' ');
    return arr[4];

  }// getUrl
  PrevSlide() {
    this.slides[this.currentSlide].className = 'galery__slide';
    if(this.currentSlide !== 0 ) {
      this.currentSlide = this.currentSlide - 1;
      this.slides[this.currentSlide].className = 'galery__slide galery__slide-showing';
    }
    else{
      this.currentSlide = this.slides.length - 1;
      this.slides[this.currentSlide].className = 'galery__slide galery__slide-showing';
    }


  }
  ngAfterViewChecked() {

    const el = document.querySelector('#test');
    this.slides = el.querySelectorAll('li.galery__slide');
    this.slides[this.currentSlide].className = 'galery__slide galery__slide-showing';
  }

}
