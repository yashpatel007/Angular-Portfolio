import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navbar')!.style.background = '#ffffff';
  } else {
    document.getElementById('navbar')!.style.background = 'transperant';
  }
}
