import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PodcastListComponent,
    PodcastDetailsComponent,
    EpisodeDetailsComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
