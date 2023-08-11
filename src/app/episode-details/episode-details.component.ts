import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../services/podcast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit, OnDestroy {
  podcastId: string = '';
  episodeId: string = '';

  podcast: any;
  episode: any;

  private subscriptions: Subscription[] = [];  // para manejar todas las suscripciones

  constructor(private route: ActivatedRoute, private podcastService: PodcastService) { }

  ngOnInit(): void {
    const routeSubscription = this.route.params.subscribe(params => {
      this.podcastId = params['podcastId'];
      this.episodeId = params['episodeId'];

      if (this.podcastId) {
        const podcastSubscription = this.podcastService.getPodcastById(this.podcastId).subscribe(data => {
          console.log('Podcast Data:', data);
          this.podcast = data;
        }, error => {
          console.error('Error retrieving podcast:', error);
        });
        this.subscriptions.push(podcastSubscription);  // añadir a la lista de suscripciones
      }

      if (this.episodeId) {
        const episodeSubscription = this.podcastService.getEpisodeById(this.episodeId).subscribe(data => {
          console.log('Episode Data:', data);
          this.episode = data;
        }, error => {
          console.error('Error retrieving episode:', error);
        });
        this.subscriptions.push(episodeSubscription);  // añadir a la lista de suscripciones
      }
    });
    this.subscriptions.push(routeSubscription);  // añadir a la lista de suscripciones
  }

  ngOnDestroy(): void {
    // Desuscribirse de todas las suscripciones para evitar pérdidas de memoria
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
