import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

const routes: Routes = [
  { path: '', component: PodcastListComponent },
  { path: 'podcast/:podcastId', component: PodcastDetailsComponent },
  { path: 'podcast/:podcastId/episode/:episodeId', component: EpisodeDetailsComponent },
  { path: '**', redirectTo: '' } // Esto redirige rutas no reconocidas a la lista de podcasts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
