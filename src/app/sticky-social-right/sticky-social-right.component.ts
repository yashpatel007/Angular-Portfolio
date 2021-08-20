import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-sticky-social-right',
  templateUrl: './sticky-social-right.component.html',
  styleUrls: ['./sticky-social-right.component.css']
})
export class StickySocialRightComponent implements OnInit {

  contentProvider: ContentProviderService;
  constructor(content: ContentProviderService) {
    this.contentProvider = content;
  }

  ngOnInit(): void {
  }

}
