import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Definición de la interfaz
interface PodcastResponse {
  feed: {
    entry: any[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private baseURL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  constructor(private http: HttpClient) { }

  getTopPodcasts(): Observable<PodcastResponse> {
    return this.http.get<PodcastResponse>(this.baseURL);
  }

  getPodcastById(podcastId: string): Observable<any> {
    const url = `https://thingproxy.freeboard.io/fetch/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

    return this.http.get(url).pipe(
      map((response: any) => {
        const podcastData = response.results[0];
        const episodes = response.results.slice(1);
        
        return {
          image: podcastData.artworkUrl600,
          title: podcastData.collectionName,
          artistName: podcastData.artistName, // Asumiendo que este es el campo correcto
          description: podcastData.description,
          episodes: episodes.map((episode: any) => ({
            id: episode.trackId,
            title: episode.trackName,
            date: episode.releaseDate,
            duration: this.convertMillisToMinutesAndSeconds(episode.trackTimeMillis)
          }))
        };
      })
    );
  }
  
  convertMillisToMinutesAndSeconds(millis: number): string {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds}`;
  }
}
