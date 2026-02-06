import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // endpoint específico para autenticacao
  private readonly API_URL = 'https://pet-manager-api.geia.vip/autenticacao';

  constructor(private http: HttpClient) {}

 login(credentials: { username: string; password: string }): Observable<any> {
  return this.http.post(`${this.API_URL}/login`, credentials).pipe(
    tap((res: any) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
      }
    })
  );
}

  // REQUISITO 5: Gerenciar expiração (Refresh Token)
  refreshToken(): Observable<any> {
    return this.http.put(`${this.API_URL}/refresh`, {}).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}