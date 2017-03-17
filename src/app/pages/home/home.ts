import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { DatePage } from '../date/date';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  centerHeight: number;
  location;

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
  
  toDatePage() {
    this.navCtrl.push(DatePage);
  }
  
  submit(){
    alert(11111);
    console.log(22222);
    
  }


}
