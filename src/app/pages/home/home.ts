import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { DatePage } from '../date/date';
import { ScrollPage } from '../scroll/scroll';
import { SelectPage } from '../select/select';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  centerHeight: number;
  location;

  selectOptions;

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {
    console.log(window.innerHeight);
    console.log(window.screen.height);
    this.centerHeight = window.innerHeight / 2;
    Keyboard.onKeyboardShow().subscribe(data => {
      console.log(data);
      console.log(window.innerHeight);
      console.log(window.screen.height);
    });
  }
  
  toDatePage() {
    this.navCtrl.push(DatePage);
  }

  toScrollPage() {
    this.navCtrl.push(ScrollPage);
  }

  toSelectPage() {
   this.navCtrl.push(SelectPage);
  }
  
  submit(){
    alert(11111);
    console.log(22222);
    
  }


}
