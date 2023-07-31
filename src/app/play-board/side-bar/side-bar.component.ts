import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStateService } from 'src/app/services/game-state.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {
  score!: BehaviorSubject<number>;
  username!: BehaviorSubject<string>;
  bestScore!: BehaviorSubject<any>;

  constructor(
    private gameState: GameStateService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.score = this.gameState.score;
    this.username = this.loginService.userName;
    this.bestScore = this.gameState.bestScore;
  }

}
