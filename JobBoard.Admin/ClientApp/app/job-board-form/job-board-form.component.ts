import { Component, OnInit } from '@angular/core';
import { JobBoardService } from './../services/job-board.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { JobBoardCreate } from '../models/jobBoardCreate';

@Component({
  selector: 'app-job-board-form',
  templateUrl: './job-board-form.component.html',
  styleUrls: ['./job-board-form.component.css']
})
export class JobBoardFormComponent implements OnInit {
    form;
    board: JobBoardCreate = {
        id:0,
        name: '',
        isEmailApply: false,
        isOnlineApply: false
    };
    constructor(
        private jobBoardService: JobBoardService, fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {
        route.params.subscribe(p => {
            this.board.id = +p['id'];
        });

        this.form = fb.group({
            id:[],
            name: ['', [Validators.required]],
            isOnlineApply: ['', []],
            isEmailApply: ['', []]
        });
    }

    ngOnInit() {
        if (this.board.id) {
            this.jobBoardService.getBoard(this.board.id)
                .subscribe(b => this.board = b);
        }
        
    }

    get name() { return this.form.get('name'); }
    get isOnlineApply() { return this.form.get('isOnlineApply'); }
    get isEmailApply() { return this.form.get('isEmailApply'); }

    submit() {        
        if (!this.board.id) {           
            this.jobBoardService.create(this.form.value)
                .subscribe(a => { this.router.navigate(['/board/boards']) });
        } else {            
            this.jobBoardService.update(this.board.id,this.form.value)
                .subscribe(a => {this.router.navigate(['/board/boards']) });
        }
    }
}
