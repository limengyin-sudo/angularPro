import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MusicComponent } from './components/music/music.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MusicInfoComponent } from './components/music-info/music-info.component';

const routes: Routes = [
  {
    path:'movie',
    component:MovieComponent
  },{
    path:'movieInfo/:id',
    component:MovieInfoComponent
  },{
    path:'music',
    component:MusicComponent
  },{
    path:'musicInfo',
    component:MusicInfoComponent
  },{
    path:'',
    redirectTo:'movie',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
