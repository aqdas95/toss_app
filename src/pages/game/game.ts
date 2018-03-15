import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  count1                : number;
  sum                   : number;
  coinState             : number;
  result                : number[] = new Array();
  
  resultArray           : number[] = new Array();
  nodivs                : number[] = new Array();
  nodivsright           : number[] = new Array();
  nodivsleft            : number[] = new Array();
  splitoneopp           : number[] = new Array();
  splitonearraya        : string[] = new Array();
  splitonearrayb        : string[] = new Array();
  splitonearrayastate2  : string[] = new Array();
  splitonearraybstate2  : string[] = new Array();
  splittwoopp           : number[] = new Array();
  splittwoarraya        : string[] = new Array();
  splittwoarrayb        : string[] = new Array();
  splittwoarrayastate2  : string[] = new Array();
  splittwoarraybstate2  : string[] = new Array();

  iterator              : number;

  state2check           : number;
  total                 : number;
  count                 : number;
  splitone              : string;
  splittwo              : string;

  constructor(public navCtrl: NavController) {
    this.iterator     = 0;
    this.state2check  = 0;
    this.count1 = 21;
    this.sum =0;
    this.coinState = 0;
    this.total=11;
    this.count=0;
    this.splitone = "<div><div class='split-one-left' id=100></div><div class='split-one-right' id=1000></div></div>";
    this.splittwo = '<div><div class="split-two-left" id=200></div><div class="split-two-right" id=2000></div></div>';
  }

  toss_make()
  {
    this.resultArray.push(Math.floor(Math.random() * 4));
    this.toss();
  }
  checkoddeven(temp)
  {
    var check;
    temp = temp % 2;
    
    if(temp == 0)
    {
      check = true;
    }
    else
    {
      check = false;
    }
    
    return check;
  }

  colorbar(count, statecheck)
  {
    var loop;
    var check;
    
    if(count == 0)
    {
      //All left
      if(statecheck == 0)
      {
        loop = 13;
        
        for(var i = 0; i < loop; i++)
        {
          check = this.checkoddeven(i);
          if(!check)
          {
            $("#" + i).css("background","maroon");
          }
        }
      }
      else
      {
        for(var j = 0; j < this.splitonearrayastate2.length; j++)
        {
          var element = document.getElementById(this.splitonearrayastate2[j]);
          element.classList.remove("split-one-left");
          element.classList.add("split-one-left-red");
          
          var element = document.getElementById(this.splitonearraybstate2[j]);
          element.classList.remove("split-one-right");
          element.classList.add("split-one-right-red");
        }
        
        for(var i = 0; i < this.nodivsleft.length; i++)
        {
          $("#" + this.nodivsleft[i]).css("background","maroon");
        }
      }
    }
    else if(count == 1 || count == 2)
    {
      //Left selected 
      for(var i = 0; i < this.splitonearraya.length; i++)
      {
        var element = document.getElementById(this.splitonearraya[i]);
        element.classList.remove("split-one-left");
        element.classList.add("split-one-left-red");
        
        var element2 = document.getElementById(this.splitonearrayb[i]);
        element2.classList.remove("split-one-right");
        element2.classList.add("split-one-right-red");
      }
      
      for(var j = 0; j < this.splittwoopp.length; j++)
      {
        $("#" + this.splittwoopp[j]).css("background","maroon");
      }
      
    }
    else if(count == 3)
    {
      //All
      loop = 13;
      
      // For those bars with no divs in between
      for(var i = 1; i < loop; i++)
      {
        for(var j = 0; j < this.nodivs.length; j++)
        {
          if(i == this.nodivs[j])
          {
            $("#" + i).css("background","maroon");
          }
        }
      }
      
      //For split bars of first
      for(var i = 0; i < this.splitonearraya.length; i++)
      {
        var element = document.getElementById(this.splitonearraya[i]);
        element.classList.remove("split-one-left");
        element.classList.add("split-one-left-red");
        
        var element2 = document.getElementById(this.splitonearrayb[i]);
        element2.classList.remove("split-one-right");
        element2.classList.add("split-one-right-red");
      }
      
      //For bars of first whose right is split
      for(var j = 0; j < this.splittwoopp.length; j++)
      {
        $("#" + this.splittwoopp[j]).css("background","maroon");
      }
      
      //For split bars of second
      for(var i = 0; i < this.splittwoarraya.length; i++)
      {
        var element = document.getElementById(this.splittwoarraya[i]);
        element.classList.remove("split-two-left");
        element.classList.add("split-one-left-red");
        
        var element2 = document.getElementById(this.splittwoarrayb[i]);
        element2.classList.remove("split-two-right");
        element2.classList.add("split-two-right-red");
      }
      
      //For bars of second whose left is split
      for(var j = 0; j < this.splitoneopp.length; j++)
      {
        $("#" + this.splitoneopp[j]).css("background","maroon");
      }
      
      //For split bars of first from 2nd state
      for(var j = 0; j < this.splitonearrayastate2.length; j++)
      {
        var element = document.getElementById(this.splitonearrayastate2[j]);
        element.classList.remove("split-one-left");
        element.classList.add("split-one-left-red");
        
        var element = document.getElementById(this.splitonearraybstate2[j]);
        element.classList.remove("split-one-right");
        element.classList.add("split-one-right-red");
      }
      
      //For split bars of second from 2nd state
      for(var j = 0; j < this.splittwoarrayastate2.length; j++)
      {
        var element = document.getElementById(this.splittwoarrayastate2[j]);
        element.classList.remove("split-two-left");
        element.classList.add("split-two-left-red");
        
        var element = document.getElementById(this.splittwoarraybstate2[j]);
        element.classList.remove("split-two-right");
        element.classList.add("split-two-right-red");
      }
    }
    else if(count == 4 || count == 5)
    {
      for(var i = 0; i < this.nodivsright.length; i++)
      {
        $("#" + this.nodivsright[i]).css("background","maroon");
      }
      
      for(var j = 0; j < this.splittwoarrayastate2.length; j++)
      {
        var element = document.getElementById(this.splittwoarrayastate2[j]);
        element.classList.remove("split-two-left");
        element.classList.add("split-two-left-red");
        
        var element = document.getElementById(this.splittwoarraybstate2[j]);
        element.classList.remove("split-two-right");
        element.classList.add("split-two-right-red");
      }
    }
    else if(count == 6)
    {
      //All left
      for(var j = 0; j < this.splitoneopp.length; j++)
      {
        $("#" + this.splitoneopp[j]).css("background","maroon");
      }
      
      for(var i = 0; i < this.splittwoarraya.length; i++)
      {
        var element = document.getElementById(this.splittwoarraya[i]);
        element.classList.remove("split-two-left");
        element.classList.add("split-one-left-red");
        
        var element2 = document.getElementById(this.splittwoarrayb[i]);
        element2.classList.remove("split-two-right");
        element2.classList.add("split-two-right-red");
      }
    }
  }
  removeclass(num)
  {
    var element = document.getElementById(num);
    element.classList.remove("bar");
    element.classList.add("bar-black");
  }
  removeclasssplitone(num, state)
  {
    var newida = num + "a";
    var newidb = num + "b";
    
    $("#" + num).html("");
    var element = document.getElementById(num);
    element.classList.remove("bar");
    element.classList.add("bar-split")
    $("#" + num).html(this.splitone);
    document.getElementById("100").setAttribute("id", newida);
    document.getElementById("1000").setAttribute("id", newidb);
    
    if(state == 2)
    {
      this.splitonearrayastate2.push(newida);
      this.splitonearraybstate2.push(newidb);
    }
    else
    {
      this.splitonearraya.push(newida);
      this.splitonearrayb.push(newidb);
    }
  }
		
	removeclasssplittwo(num, state)
  {
    var newida = num + "a";
    var newidb = num + "b";
    
    $("#" + num).html("");
    var element = document.getElementById(num);
    element.classList.remove("bar");
    element.classList.add("bar-split")
    $("#" + num).html(this.splittwo);
    document.getElementById("200").setAttribute("id", newida);
    document.getElementById("2000").setAttribute("id", newidb);
    
    if(state == 2)
    {
      this.splittwoarrayastate2.push(newida);
      this.splittwoarraybstate2.push(newidb);
    }
    else
    {
      this.splittwoarraya.push(newida);
      this.splittwoarrayb.push(newidb);
    }
  }
  toss()
  {
    var coinstate;
    
    for(var i = this.iterator; i < this.resultArray.length; i++)
    {
      coinstate = this.resultArray[i];
    
      if(coinstate == 1)
      {
        //For HTT
        var temp = this.total + 1;
        
        this.removeclass(this.total);
        this.removeclass(temp);
        
        this.nodivs.push(this.total);
        this.nodivs.push(temp);
        this.nodivsleft.push(this.total);
        this.nodivsright.push(temp);
        
        this.total -=2;
      }
      else if(coinstate == 2)
      {
        //For THH
        var temp = this.total + 1;
        
        this.removeclasssplitone(this.total, coinstate);
        this.removeclasssplittwo(temp, coinstate);
        
        this.state2check++;
        this.total -=2;
      }
      else if(coinstate == 3)
      {
        //For HHH
        var temp = this.total + 1;
        
        this.removeclass(this.total);
        this.removeclasssplittwo(temp, coinstate);
        
        this.splittwoopp.push(this.total);
        this.nodivs.push(this.total);
        
        this.total -=2;
        this.count++;
      }
      else if(coinstate == 0)
      {
        //For TTT
        var temp = this.total + 1;
        
        this.removeclasssplitone(this.total, coinstate);
        this.removeclass(temp);
        
        this.splitoneopp.push(temp);
        this.nodivs.push(temp);
        
        this.total -=2;
        this.count++;
      }
    }
    
    this.iterator++;

    if(this.resultArray.length == 6)
    {
      this.colorbar(this.count, this.state2check);
    }
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
      self.resultArray.push(self.coinState);
      self.toss();
    }, 3000);
    //this.toss();
  }
  

}
