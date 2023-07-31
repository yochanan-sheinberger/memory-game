import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayBoardRoutingModule } from './play-board-routing.module';
import { PlayBoardComponent } from './play-board.component';
import { BoardComponent } from './board/board.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    PlayBoardComponent,
    BoardComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    PlayBoardRoutingModule
  ]
})
export class PlayBoardModule { }
