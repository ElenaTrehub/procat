import { Component, OnInit } from '@angular/core';
import {ScreenService} from '../../services/screen-service/screen.service';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.sass']
})
export class WhyComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
