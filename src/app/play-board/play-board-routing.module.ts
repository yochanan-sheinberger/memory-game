import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayBoardComponent } from './play-board.component';

const routes: Routes = [
  {path: '', component: PlayBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayBoardRoutingModule { }
