import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TermsPage } from '../pages/terms/terms';
//import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { SubscribePage } from './../pages/subscribe/subscribe';

import { ContactPage } from '../pages/contact/contact';
import { GamePage } from '../pages/game/game';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Subscription', component: SubscribePage },
      { title: 'About I Ching', component: TermsPage },
      { title: 'About Us', component: AboutPage },
      { title: 'Contact', component: ContactPage }
    ];
  }
  openPage(page){
    this.nav.setRoot(page.component);
  }
}
