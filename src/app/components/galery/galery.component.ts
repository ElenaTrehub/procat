import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car-service/car.service';
import {HttpClient} from '@angular/common/http';
import {ApiRoutes} from '../../models/ApiRoutes';
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
  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer,
              private screenService: ScreenService) {

  }
  carsMethod(res){
    this.cars = res.cars ;

  }
  ngOnInit() {
    this.http.get(`${ApiRoutes.GALERY_CARS_INFO}`)
      .subscribe(response => this.carsMethod(response) );

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
