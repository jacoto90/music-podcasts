import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {
  podcasts: any[] = [];
  filterTerm: string = '';

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.podcastService.getTopPodcasts().subscribe(response => {
      this.podcasts = response.feed.entry;  // Cambiado de response.results a response.feed.entry
    });
  }
}
