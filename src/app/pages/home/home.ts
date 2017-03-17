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
  initialHeight;
  p: string = 'The accident took place in';

  selectOptions;

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {
    console.log(window.innerHeight);
    console.log(window.screen.height);
    this.centerHeight = window.innerHeight / 3;
    this.initialHeight = 0 + this.centerHeight;
    Keyboard.onKeyboardShow().subscribe(data => {
      console.log(data);
      console.log(window.innerHeight);
      console.log(window.screen.height);
    });
    
    
    this.p = "Sl da id orci porta tor at sem. Curellentesque nec, egestas non nisi.  da id orci porta tor at sem. Curellentesque nec, egestas non nisi  da id orci porta tor at sem. Curellentesque nec, egestas non nisi  da id orci porta tor at sem. Curellentesque nec, egestas non nisi  da id orci porta tor at sem. Curellentesque nec, egestas non nisiVivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
    console.log(22222);
    this.p += ' ' + this.location;
    this.location = '';
  }
  
  onScroll(event){
    let h = event.target.scrollTop;
    console.log(h);
    
    this.centerHeight = this.initialHeight + h;
  }


}
