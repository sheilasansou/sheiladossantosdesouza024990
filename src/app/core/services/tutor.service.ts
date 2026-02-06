import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TutorService {
  private readonly API = 'https://pet-manager-api.geia.vip/v1/tutores';

  constructor(private http: HttpClient) {}

  save(tutor: any): Observable<any> {
    return this.http.post('https://pet-manager-api.geia.vip/v1/tutores', tutor);
  }

  list(): Observable<any> {
    return this.http.get('https://pet-manager-api.geia.vip/v1/tutores');
  }
}