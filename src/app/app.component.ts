import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AngularFirestore } from 'angularfire2/firestore';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public fcm:FCM,public cfs:AngularFirestore,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(platform.is('mobile')){
        this.fcm.getToken().then(token=>{
          this.cfs.doc("fcm/users/list/0").set({token}).then(data=>{
            alert("Save token success!");
          }).catch(err=>{
            alert(JSON.stringify(err));
          });
        }).catch(err=>{
          alert(JSON.stringify(err));
        });
        this.fcm.onNotification().subscribe(data => {
          if(data.wasTapped){
            alert("Received in background");
          } else {
            alert("Received in foreground");
          };
        });        
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

