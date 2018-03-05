import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  count1: number;
  sum : number;
  coinState: number;
  result: number[] = new Array();
  nodivs: number[] = new Array();
  splitoneopp : number[] = new Array();
  splitonearraya : number[] = new Array();
  splitonearrayb : number[] = new Array();
  splittwoopp : number[] = new Array();
  splittwoarraya : number[] = new Array();
  splittwoarrayb : number[] = new Array();
  total : number;
  count : number;
  splitone : string;
  splittwo : string;
  constructor(public navCtrl: NavController) {
    this.count1 = 21;
    this.sum =0;
    this.coinState = 0;
    this.total=11;
    this.count=0;
    this.splitone = "<div><div class='split-one-left' id=100></div><div class='split-one-right' id=1000></div></div>";
    this.splittwo = '<div><div class="split-two-left" id=200></div><div class="split-two-right" id=2000></div></div>';
  }

  
//major function on button click

  check() {
    if (this.count1 == 27) {
      window.location.href = "contact";
    }

    $(".yin-yang").attr("disabled", true);
    $("#" + this.count1).css("background", "#6d0d0d")
    $("." + this.count1).css("background", "#6d0d0d")
    $("#" + this.count1).css("border-color", "#fff")
    $("." + this.count1).css("border-color", "#fff")
    this.count1++;

    
    //for flipping of coins

    var flipResult1 = Math.random();
    var flipResult2 = Math.random();
    var flipResult3 = Math.random();
    $('#coin1').removeClass();
    $('#coin2').removeClass();
    $('#coin3').removeClass();

    //for coin 1
    setTimeout(function () {
      if (flipResult1 <= 0.5) {
        $('#coin1').addClass('heads1');
      }
      else {
        $('#coin1').addClass('tails1');
      }
    }, 100);

    //for coin 2
    setTimeout(function () {
      if (flipResult2 <= 0.5) {
        $('#coin2').addClass('heads2');
      }
      else {
        $('#coin2').addClass('tails2');
      }
    }, 105);

    //for coin 3
    setTimeout(function () {
      if (flipResult3 <= 0.5) {
        $('#coin3').addClass('heads3');
      }
      else {
        $('#coin3').addClass('tails3');
      }
    }, 110);

    this.coinState = 0;
    var self=this;
    setTimeout(function () {
      $('.yin-yang').removeAttr("disabled");
      if ($('#coin1').hasClass('heads1')) {
        self.coinState++;
      }
      if ($('#coin2').hasClass('heads2')) {
        self.coinState++;
      }
      if ($('#coin3').hasClass('heads3')) {
        self.coinState++;
      }
      self.result.push(self.coinState);
    }, 3000);

    //this.toss();
  }

}
