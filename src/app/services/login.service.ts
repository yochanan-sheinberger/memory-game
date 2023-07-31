import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName = new BehaviorSubject('');
  constructor() {
    const username = sessionStorage.getItem('username');
    if (username) {
      this.userName.next(username);
    }
  }

  login(username: string): void {
    sessionStorage.setItem('username', username);
    this.userName.next(username);
  }
}
