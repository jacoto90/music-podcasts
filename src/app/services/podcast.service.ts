import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

interface PodcastResponse {
  feed: {
    entry: any[];
  };
}

interface Episode {
  id: string;
  title: string;
  date: string;
  duration: string;
  description?: string;
}

interface Podcast {
  image: string;
  title: string;
  artistName: string;
  description: string;
  episodes?: Episode[];
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

  getPodcastById(podcastId: string): Observable<Podcast> {
    const url = `https://thingproxy.freeboard.io/fetch/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

    return this.http.get(url).pipe(
      map((response: any) => {
        if (response && response.results && response.results.length) {
          const podcastData = response.results[0];
          const episodes = response.results.slice(1);

          return {
            image: podcastData.artworkUrl600 || '',
            title: podcastData.collectionName || '',
            artistName: podcastData.artistName || '',
            description: podcastData.description || '',
            episodes: episodes.map((episode: any) => ({
              id: episode.trackId,
              title: episode.trackName,
              date: episode.releaseDate,
              duration: this.convertMillisToMinutesAndSeconds(episode.trackTimeMillis),
              description: episode.description || ''
            }))
          };
        }
        throw new Error('Podcast data not available');
      }),
      catchError(error => {
        console.error('Error fetching podcast details:', error);
        return throwError('Error fetching podcast details');
      })
    );
  }

  getEpisodeById(episodeId: string): Observable<Episode> {
    const url = `https://thingproxy.freeboard.io/fetch/https://itunes.apple.com/lookup?id=${episodeId}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        if (response && response.results && response.results.length) {
          const episodeData = response.results[0];
          return {
            id: episodeData.trackId,
            title: episodeData.trackName,
            date: episodeData.releaseDate,
            duration: this.convertMillisToMinutesAndSeconds(episodeData.trackTimeMillis),
            description: episodeData.description || ''
          };
        }
        throw new Error('Episode data not available');
      }),
      catchError(error => {
        console.error('Error fetching episode details:', error);
        return throwError('Error fetching episode details');
      })
    );
  }

  convertMillisToMinutesAndSeconds(millis: number): string {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds}`;
  }
}
