import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
