import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { HttpModule } from '@angular/http'
@Component({
  selector: 'page-google-analytics',
  templateUrl: 'google-analytics.html'
})
export class GoogleAnalyticsPage {

    constructor(public ga: GoogleAnalytics) {
        //CHANGE YOUR ID HERE
        this.ga.startTrackerWithId('UA-114666545-1')
        .then(() => {
          console.log('Google analytics is ready now');
          this.ga.trackView('google-analytics');
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));
    }
           

}
