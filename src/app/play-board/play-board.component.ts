import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-board',
  templateUrl: './play-board.component.html',
  styleUrls: ['./play-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
