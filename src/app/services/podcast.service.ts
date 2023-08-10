import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private BASE_URL = 'https://itunes.apple.com';

  constructor(private http: HttpClient) { }

  getTopPodcasts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`);
  }

  getPodcastDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`);
  }

  // Puedes agregar más métodos según sea necesario
}
