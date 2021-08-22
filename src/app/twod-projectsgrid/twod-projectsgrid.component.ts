import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-twod-projectsgrid',
  templateUrl: './twod-projectsgrid.component.html',
  styleUrls: ['./twod-projectsgrid.component.css']
})
export class TwodProjectsgridComponent implements OnInit {

  contentProvider: ContentProviderService
  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
    console.log(contentProvider.content.projects)
  }

  ngOnInit(): void {
  }

}
