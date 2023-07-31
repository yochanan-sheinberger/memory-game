import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit, AfterViewInit {
  bulbs = [1, 2, 3, 4, 5, 6];
  gameSequence: number[] = [];
  userSequence: number[] = [];
  clickEnabled = true;
  gameOver = false;
  bulbsDom!: NodeListOf<HTMLDivElement>;


  constructor(private gameState: GameStateService) {
    // this.bulbsDom = document.querySelectorAll('.bulb');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bulbsDom = document.querySelectorAll('.bulb');
    this.addNumToSequence();
  }

  addNumToSequence(): void {
    const num =  Math.floor(Math.random() * 6 + 1);
    this.gameSequence.push(num);
    this.playSequence();
  }

  playSequence(): void {
    this.clickEnabled = false;
    this.gameSequence.forEach((bulb, i) => {      
      setTimeout(() => {
        this.lightBulb(bulb - 1);
      }, (i + 1) * 1000);
    });
    setTimeout(() => {
      this.clickEnabled = true;
    }, this.gameSequence.length * 1000);
  }

  handleBulbClick(bulbIndex: number): void {
    if (this.clickEnabled) {
      this.lightBulb(bulbIndex - 1);
      this.userSequence.push(bulbIndex);
      this.checkSequence();
    }
  }

  checkSequence(): void {
    const gameSequenceString = this.gameSequence.join('');
    const userSequenceString = this.userSequence.join('');
    
    if (!gameSequenceString.startsWith(userSequenceString)) {
      this.gameState.updateBestScore();
      this.gameOver = true;
    } else if (this.gameSequence.length === this.userSequence.length) {
      this.addNumToSequence();
      this.userSequence = [];
      this.gameState.incrementScore();
    }
  }

  lightBulb(bulbIndex: number): void {
    this.bulbsDom[bulbIndex].classList.add('light-bulb');
    setTimeout(() => {
      this.bulbsDom[bulbIndex].classList.remove('light-bulb');
    }, 250);
  }

  restartGame(): void {
    this.gameState.deleteScore();
    this.gameOver = false;
    this.gameSequence = [];
    this.userSequence = [];
    this.addNumToSequence();
  }
}
