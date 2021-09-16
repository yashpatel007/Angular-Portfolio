import { AfterViewInit, EventEmitter, HostListener, Input, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import * as  AOS from 'aos';
import { ContentProviderService } from './services/content-provider.service';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  contentProvider: ContentProviderService;
  theme: String;
  is3D: boolean;

  show: any = {
    hoverButton: window.innerWidth < 1400 ? true : false,
  }


  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
    this.theme = contentProvider.theme;
    this.is3D = contentProvider.is3D;
  }
  @ViewChild(NavbarComponent) nav!: NavbarComponent;
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    AOS.init();
  }
  title = 'yash-portfolio';

  getTheme() {
    return this.contentProvider.theme;
  }

  /* get the event from twod hero*/
  updateTheme(event: any) {
    this.theme = event;
  }
  changeTheme() {
    if (this.contentProvider.theme == "light") {
      this.theme = "dark";
      this.contentProvider.theme = "dark";
    } else {
      this.theme = "light";
      this.contentProvider.theme = "light";
    }
  }


  swithTo3D(event: any) {
    this.is3D = event;
  }

  /* set background as opaque: if the window is scrolled*/
  changeColor() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      this.nav.setBackgroundColor(1);
    }
    else {
      this.nav.setBackgroundColor(0);
    }
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.changeColor();
  }
}

// window.onscroll = function () {
//   "use strict";
//   if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
//     myNav!.classList.add("nav-colored");
//     myNav!.classList.remove("nav-transparent");
//   }
//   else {
//     myNav!.classList.add("nav-transparent");
//     myNav!.classList.remove("nav-colored");
//   }
// };