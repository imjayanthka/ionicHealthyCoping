import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ActivityPage } from '../pages/activity/activity';


import { DataEntryPage } from "../pages/data-entry/data-entry";
import { WeightPage } from "../pages/weight/weight";
import { Hba1cPage } from "../pages/hba1c/hba1c";
import { ExercisePage } from "../pages/exercise/exercise";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ActivityPage,
    DataEntryPage,
    Hba1cPage,
    WeightPage,
    ExercisePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ActivityPage,
    DataEntryPage,
    Hba1cPage,
    WeightPage,
    ExercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
