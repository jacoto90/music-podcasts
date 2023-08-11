import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.scss']
})
export class PodcastDetailsComponent implements OnInit {
  podcast: any;

  constructor(private route: ActivatedRoute, private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const podcastId = params['podcastId'];
      this.podcastService.getPodcastById(podcastId).subscribe(data => {
        this.podcast = data;
      });
    });
  }
}
