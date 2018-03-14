import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import * as $ from 'jquery';
import { DISABLED } from '@angular/forms/src/model';


@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage 
{
  public disabled1: string;
  public disabled2: string;

  constructor(public navCtrl: NavController, public admob: AdMobFree) 
  {
  }

  adclick1()
  {
    $('.addiv1').prependTo('.card');
    $('.addiv1').removeAttr("click");
    this.launchInterstitial();
  }
  
  adclick2()
  {
    $('.addiv2').prependTo('.card');
    $('.addiv2').removeAttr("click");
    this.launchInterstitial();
  }

  showBanner() 
  {
 
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true
        //id: Your Ad Unit ID goes here
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        // success
    }).catch(e => console.log(e));
  }

  launchInterstitial() 
  {
 
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true, // Remove in production
        autoShow: true
        //id: Your Ad Unit ID goes here
    };

    this.admob.interstitial.config(interstitialConfig);

    this.admob.interstitial.prepare().then(() => {
        // success
    });
  }

}
