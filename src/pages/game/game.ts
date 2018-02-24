import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  count : number;
  constructor(public navCtrl: NavController) {
    this.count = 0;
  }
    check() {
    $("#" + this.count).css("background", "#6d0d0d")
    $("." + this.count).css("background", "#6d0d0d")
    $("#" + this.count).css("border-color", "#fff")
    $("." + this.count).css("border-color", "#fff")
    this.count++;
  }
}