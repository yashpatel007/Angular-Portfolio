import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-twod-experience',
  templateUrl: './twod-experience.component.html',
  styleUrls: ['./twod-experience.component.css']
})
export class TwodExperienceComponent implements OnInit {

  contentProvider: ContentProviderService;
  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
  }

  ngOnInit(): void {
  }

}
