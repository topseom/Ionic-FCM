import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC03pU63AG6GrLk2YCnqZbq54QpF422MBI",
      authDomain: "ionic-advance-b9172.firebaseapp.com",
      databaseURL: "https://ionic-advance-b9172.firebaseio.com",
      projectId: "ionic-advance-b9172",
      storageBucket: "ionic-advance-b9172.apps",
      messagingSenderId: "355913631437"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FCM
  ]
})
export class AppModule {}
