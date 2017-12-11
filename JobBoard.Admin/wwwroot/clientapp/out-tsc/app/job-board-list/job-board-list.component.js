"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var job_board_service_1 = require("./../services/job-board.service");
var router_1 = require("@angular/router");
var JobBoardListComponent = (function () {
    function JobBoardListComponent(boardService, router) {
        this.boardService = boardService;
        this.router = router;
        this.boards = [];
        this.board = {};
    }
    JobBoardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardService.getBoards()
            .subscribe(function (boards) { return _this.boards = boards; });
    };
    JobBoardListComponent.prototype.delete = function (id, i) {
        console.log(i);
        if (confirm("Are you sure?")) {
            this.boards.splice(i, 1);
            this.boardService.delete(id)
                .subscribe();
        }
    };
    return JobBoardListComponent;
}());
JobBoardListComponent = __decorate([
    core_1.Component({
        selector: 'app-job-board-list',
        templateUrl: './job-board-list.component.html',
        styleUrls: ['./job-board-list.component.css']
    }),
    __metadata("design:paramtypes", [job_board_service_1.JobBoardService, router_1.Router])
], JobBoardListComponent);
exports.JobBoardListComponent = JobBoardListComponent;
//# sourceMappingURL=job-board-list.component.js.map