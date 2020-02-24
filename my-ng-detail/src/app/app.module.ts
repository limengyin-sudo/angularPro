import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MusicComponent } from './components/music/music.component';
import { MusicInfoComponent } from './components/music-info/music-info.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MusicComponent,
    MusicInfoComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
