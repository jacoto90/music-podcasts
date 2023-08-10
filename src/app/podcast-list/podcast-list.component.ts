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
  searchTerm: string = '';
  filteredPodcasts: any[] = []; // Inicialmente, la lista filtrada es igual a la lista original

  constructor(private podcastService: PodcastService) {}
  ngOnInit(): void {
    this.podcastService.getTopPodcasts().subscribe(
      (data: any) => {
        if (data.feed && data.feed.entry) {
          this.podcasts = data.feed.entry;
          this.filteredPodcasts = [...this.podcasts]; // Inicialmente, la lista filtrada es igual a la lista completa
        }
      },
      error => {
        console.error('Error obteniendo podcasts:', error);
      }
    );
  }

  search() {
    if (!this.searchTerm.trim()) {
      // Si no hay término de búsqueda, muestra todos los podcasts.
      this.filteredPodcasts = [...this.podcasts];
      return;
    }
    // Filtrar los podcasts basado en el término de búsqueda.
    this.filteredPodcasts = this.podcasts.filter(podcast =>
      podcast['im:name'].label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}