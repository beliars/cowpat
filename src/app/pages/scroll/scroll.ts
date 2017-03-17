import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-scroll',
  templateUrl: 'scroll.html'
})
export class ScrollPage {
  centerHeight: number;

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {
  this.centerHeight = window.innerHeight / 2;
  }
  
}
