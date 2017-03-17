import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from './pages/home/home';
import { DatePage } from './pages/date/date';
import { ScrollPage } from './pages/scroll/scroll';
import { SelectPage } from './pages/select/select';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatePage,
    ScrollPage,
    SelectPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatePage,
    ScrollPage,
    SelectPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
