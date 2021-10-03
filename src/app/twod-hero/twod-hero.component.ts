import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';

@Component({
  selector: 'app-twod-hero',
  templateUrl: './twod-hero.component.html',
  styleUrls: ['./twod-hero.component.css']
})
export class TwodHeroComponent implements OnInit {


  @Output() themeChange: any = new EventEmitter();
  @Output() switch3D: any = new EventEmitter();

  lightOn: boolean = false;
  contentProvider: ContentProviderService;

  constructor(contentProvider: ContentProviderService) {
    this.contentProvider = contentProvider;
  }
  ngOnInit(): void { }

  switchLight() {
    this.lightOn = !this.lightOn;
  }

  changeTheme() {
    if (this.contentProvider.theme == "light") {
      this.themeChange.emit("dark");
      this.contentProvider.theme = "dark";
    } else {
      this.themeChange.emit("light");
      this.contentProvider.theme = "light";
    }
  }

  toggel3D() {
    if (this.contentProvider.is3D) {
      this.contentProvider.is3D = false;
      this.switch3D.emit(false);
    } else {
      this.contentProvider.is3D = true;
      this.switch3D.emit(true);
    }
  }

  ngAfterViewInit($event: any) {
    // array with texts to type in typewriter
    var dataText = this.contentProvider.content.iamtexts;

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text: any, i: any, fnCallback: any) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
        document.getElementById("typewriter")!.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i: any) {
      if (typeof dataText[i] == 'undefined') {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 2000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  }
}

