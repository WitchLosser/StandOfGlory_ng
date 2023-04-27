import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginRequest, ILoginResponse, IRegisterRequest } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenKey: string = 'standofglory373737373737';
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'accounts';
  }

  login(data: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      `${this.url}/login`, 
      { 
        username: data.username,
        password: data.password 
      }
    );
  }

  register(data: IRegisterRequest): Observable<IRegisterRequest> {
    return this.http.post<IRegisterRequest>(
      `${this.url}/register`, 
      { 
        username: data.username,
        password: data.password,
        email: data.email
      }
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.url}/logout`, null);
  }
  isAuthorized(): boolean {
    return this.getToken() != null;
  }
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  saveToken(token: string): void{
    localStorage[this.tokenKey] = token;
  }
  getToken(): string | null {
    return localStorage[this.tokenKey];
  }
}