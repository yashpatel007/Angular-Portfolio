import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-twod-about',
  templateUrl: './twod-about.component.html',
  styleUrls: ['./twod-about.component.css']
})
export class TwodAboutComponent implements OnInit {

  contentProvider: ContentProviderService;
  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
  }

  ngOnInit(): void {
  }

}

let x = document.getElementsByClassName('about-image');