import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ListItem {
  username: string,
  score: number,
}

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  score = new BehaviorSubject(0);
  bestScore = new BehaviorSubject<any>(null);

  constructor() {
    const JSONBestScore = localStorage.getItem('best-score');    
    if (JSONBestScore) {
      this.bestScore.next(JSON.parse(JSONBestScore));
    }
   }

  incrementScore(): void {
    this.score.next(this.score.getValue() + 10);
  }

  updateBestScore(): void {
    let currentList = this.bestScore.getValue() || [];
    const username = sessionStorage.getItem('username');
    
    currentList.push({
      username,
      score: this.score.getValue(),
    });
    currentList.sort((a: ListItem, b: ListItem) => {
      return b.score - a.score;
    });
    currentList = currentList.slice(0, 15);

    this.bestScore.next(currentList);
    
    localStorage.setItem('best-score', JSON.stringify(currentList));
  }

  deleteScore() {
    this.score.next(0);
  }


}
