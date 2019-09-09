import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import {ScreenService} from '../services/screen-service/screen.service';
@Directive({
  selector: '[screenMiddle]'
})
export class ScreenMiddleDirective implements OnInit {
  private hasView = false;
  constructor(private template: TemplateRef<Object>,
              private screenService: ScreenService,
              private viewContainer: ViewContainerRef) {
    screenService.resize$.subscribe(() => {
      this.onResize();
    });
  }
  ngOnInit() {
    this.onResize();
  }
  onResize() {
    this.screenLarge = false;
  }
  @Input()
  set screenLarge(condition) {
    condition = this.screenService.screenWidth < this.screenService.largePixels && this.screenService.screenWidth >= this.screenService.middlePixels;
    if ( condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if ( !condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
}
