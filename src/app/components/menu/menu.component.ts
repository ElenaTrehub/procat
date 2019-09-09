import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScreenService} from '../../services/screen-service/screen.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit, AfterViewInit {
  activeItem;
  constructor(private screenService: ScreenService) { }

  ngAfterViewInit(){
    if(!this.screenService.isSmall()){
      const item = document.getElementsByClassName('menu__list')[0].children[0].children[0];
      console.log(item);
      item.classList.add('menu__link-active');
      this.activeItem = item;
    }
    else{
      const item = document.getElementsByClassName('menu-small__list')[0].children[0].children[0];
      console.log(item);
      item.classList.add('menu-small__link-active');
      this.activeItem = item;
    }

  }// ngAfterViewInit

  ngOnInit() {
  }
  activetedMenuItem(event){
    const target = event.target;
    if(this.screenService.isSmall()){
      if (!target.classList.contains('menu-small__link-active')){
        target.classList.add('menu-small__link-active');
      }
      else{
        return;
      }
      this.disactivaitedMenuIten(target);
    }
    else{
      if (!target.classList.contains('menu__link-active')){
        target.classList.add('menu__link-active');
      }
      else{
        return;
      }
      this.disactivaitedMenuIten(target);
    }

  }// activetedMenuItem

  disactivaitedMenuIten(item){
    if(this.screenService.isSmall()){
      if (this.activeItem){
        this.activeItem.classList.remove('menu-small__link-active');
        this.activeItem = item;
      }
      else {
        this.activeItem = item;
      }
    }
    else{
      if (this.activeItem){
        this.activeItem.classList.remove('menu__link-active');
        this.activeItem = item;
      }
      else {
        this.activeItem = item;
      }
    }

  }// disactivatedMenuIten
}
