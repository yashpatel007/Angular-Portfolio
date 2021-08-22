import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import * as  AOS from 'aos';

import { ContentProviderService } from './services/content-provider.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  contentProvider: ContentProviderService;
  @Input() theme: String


  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
    this.theme = contentProvider.theme;
  }

  ngOnInit(): void {
    AOS.init();
  }
  title = 'yash-portfolio';

  getTheme() {
    return this.contentProvider.theme;
  }

}


var myNav: HTMLElement = document.getElementById('mynav')!;
window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    myNav!.classList.add("nav-colored");
    myNav!.classList.remove("nav-transparent");
  }
  else {
    myNav!.classList.add("nav-transparent");
    myNav!.classList.remove("nav-colored");
  }
};