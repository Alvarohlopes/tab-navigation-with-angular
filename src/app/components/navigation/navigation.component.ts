import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}
}
