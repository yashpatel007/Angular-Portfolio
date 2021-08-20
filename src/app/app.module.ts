import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwodHeroComponent } from './twod-hero/twod-hero.component';
import { TwodAboutComponent } from './twod-about/twod-about.component';
import { TwodProjectsgridComponent } from './twod-projectsgrid/twod-projectsgrid.component';
import { TwodFooterComponent } from './twod-footer/twod-footer.component';
import { ContentProviderService } from './services/content-provider.service';
import { TwodExperienceComponent } from './twod-experience/twod-experience.component';
import { TwodContactComponent } from './twod-contact/twod-contact.component';
import { StickySocialRightComponent } from './sticky-social-right/sticky-social-right.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    NavbarComponent,
    TwodHeroComponent,
    TwodAboutComponent,
    TwodProjectsgridComponent,
    TwodFooterComponent,
    TwodExperienceComponent,
    TwodContactComponent,
    StickySocialRightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
