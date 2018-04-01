import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage 
{
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) 
  {

  }

  scrollToTop() 
  {
    this.content.scrollToTop(300);
  }

  scrollToBottom() 
  {
    this.content.scrollToBottom(300);
  }

}
