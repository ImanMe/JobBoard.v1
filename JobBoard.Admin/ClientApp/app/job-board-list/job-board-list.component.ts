import { Component, OnInit } from '@angular/core';
import { JobBoardService } from './../services/job-board.service';
@Component({
  selector: 'app-job-board-list',
  templateUrl: './job-board-list.component.html',
  styleUrls: ['./job-board-list.component.css']
})
export class JobBoardListComponent implements OnInit {

    boards;
    constructor(private boardService: JobBoardService) { }

    ngOnInit() {
        this.boardService.getBoards()
            .subscribe(boards => this.boards = boards);
    }

}
