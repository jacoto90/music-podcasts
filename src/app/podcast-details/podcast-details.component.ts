import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.scss']
})
export class PodcastDetailsComponent implements OnInit {
  podcastId: string = '';// Agregamos esta línea
  podcast: any;

    constructor(private route: ActivatedRoute, private podcastService: PodcastService) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.podcastId = params['podcastId'];  // Inicializamos podcastId
            this.podcastService.getPodcastById(this.podcastId).subscribe(data => {
                this.podcast = data;
            });
        });
    }
}
