import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private resiseSource = new Subject<null>();
  public resize$ = this.resiseSource.asObservable();

  largePixels = 1024;
  middlePixels = 780;

  screenWidth: number;
  screenHeight: number;

  constructor() {
    try{
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize', (event) => this.onResize(event));
    }
    catch(ex){
      console.log(ex);
    }
  }

  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.resiseSource.next();
  }
  isSmall(): boolean {
    return this.screenWidth < this.middlePixels;
  }
  isLarge(): boolean {

    return this.screenWidth > this.largePixels;

  }

  isMiddle(): boolean{
    return this.screenWidth >= this.middlePixels && this.screenWidth < this.largePixels;
  }
}
