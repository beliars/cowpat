import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-date',
  templateUrl: 'date.html'
})
export class DatePage {
  centerHeight: number;
  aaa;
  
  myDate = '2017-03-17T08:23:52.687Z';

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {
    console.log(window.innerHeight);
    console.log(window.screen.height);
    this.centerHeight = window.innerHeight / 3;
    Keyboard.onKeyboardShow().subscribe(data => {
      console.log(data);
      console.log(window.innerHeight);
      console.log(window.screen.height);
    });
  }
  
  onClick(event) {
    console.log(444);
    console.log(event)
  }
  
  onCancel(){
    console.log(555)
  }
  
}
