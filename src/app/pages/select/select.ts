import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html'
})
export class SelectPage {
  centerHeight: number;

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {
  this.centerHeight = window.innerHeight / 2;
  }
  
}
