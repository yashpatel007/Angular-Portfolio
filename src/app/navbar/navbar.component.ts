import { Component, OnInit, HostListener } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public contentProvider: ContentProviderService) { }


  ngOnInit(): void {
  }

  setBackgroundColor(state: number) {
    var myNav: HTMLElement = document.getElementById('mynav')!
    if (state == 1) {
      myNav!.classList.add("nav-colored");
      myNav!.classList.remove("nav-transparent");
    }
    else {
      myNav!.classList.add("nav-transparent");
      myNav!.classList.remove("nav-colored");
    }
  }



}




