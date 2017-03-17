import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { DatePicker } from 'ionic-native';

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
    this.centerHeight = window.innerHeight / 2;
    Keyboard.onKeyboardShow().subscribe(data => {

    });
  }
  
  onClick(event) {
    console.log(event);
    DatePicker.show({
    date: new Date(),
    mode: 'date'
  }).then(
    date => console.log('Got date: ', date),
    err => console.log('Error occurred while getting date: ', err)
  );
  }
  
  onCancel(){
    console.log(555)
  }
  
}
