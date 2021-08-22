import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-twod-contact',
  templateUrl: './twod-contact.component.html',
  styleUrls: ['./twod-contact.component.css']
})
export class TwodContactComponent implements OnInit {

  contentProvider: ContentProviderService
  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
  }

  ngOnInit(): void {
  }

}
