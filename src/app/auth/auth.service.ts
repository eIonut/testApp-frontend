import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  public loggedIn = new BehaviorSubject<boolean>(this.getToken() !== null);
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    console.log('AuthService created');
    console.log('loggedIn:', this.loggedIn.value);
    console.log('token:', this.getToken());
    if (this.getToken()) {
      this.loggedIn.next(true);
    }
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          this.loggedIn.next(true);
          this.toastr.success('You are now logged in.', '');
        }),
        catchError((error) => {
          this.loggedIn.next(false);
          return throwError(() => new Error(error));
        })
      );
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    this.toastr.info('You are now logged out.', '');
  }

  public register(userInfo: {
    username: string;
    email: string;
    password: string;
  }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/register`,
      userInfo
    );
  }
}
