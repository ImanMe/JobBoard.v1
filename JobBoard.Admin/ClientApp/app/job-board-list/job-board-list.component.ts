import { Component, OnInit } from '@angular/core';
import { JobBoardService } from './../services/job-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-board-list',
  templateUrl: './job-board-list.component.html',
  styleUrls: ['./job-board-list.component.css']
})
export class JobBoardListComponent implements OnInit {

    boards = [];
    board={};
    constructor(private boardService: JobBoardService, private router: Router) { }

    ngOnInit() {
        this.boardService.getBoards()
            .subscribe(boards => this.boards = boards);
    }

    

    delete(id, i) {
        console.log(i);
        if (confirm("Are you sure?")) {
            this.boards.splice(i, 1);
            this.boardService.delete(id)
                .subscribe();                       
        }
    }

}
