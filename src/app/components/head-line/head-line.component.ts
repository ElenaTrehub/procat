import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScreenService} from '../../services/screen-service/screen.service';

@Component({
  selector: 'app-head-line',
  templateUrl: './head-line.component.html',
  styleUrls: ['./head-line.component.sass']
})
export class HeadLineComponent implements OnInit {
  isShowMenu = false;
  constructor(private screenService: ScreenService) { }

  ngOnInit() {

  }


  ShowSmallMenu(){
    if(!this.isShowMenu){
      const item = document.getElementsByClassName('menu-small')[0] as HTMLElement;
      console.log(item);
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      this.isShowMenu = true;
    }
    else{
      const item = document.getElementsByClassName('menu-small')[0] as HTMLElement;
      console.log(item);
      item.style.display = 'none';
      this.isShowMenu = false;
    }
  }
}
