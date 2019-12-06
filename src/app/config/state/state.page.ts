import { Component, OnInit, AfterViewInit, Input, ViewChild,  ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.page.html',
  styleUrls: ['./state.page.scss'],
})
export class StatePage implements OnInit {
  @ViewChild("expandWrapper", {static: false}) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

  ngOnInit() {
  }

}
