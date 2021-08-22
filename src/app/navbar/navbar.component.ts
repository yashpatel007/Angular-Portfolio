import { Component, OnInit } from '@angular/core';
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
}


