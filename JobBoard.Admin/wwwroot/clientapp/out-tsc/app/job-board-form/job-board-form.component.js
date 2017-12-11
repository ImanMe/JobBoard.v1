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
var forms_1 = require("@angular/forms");
require("rxjs/add/Observable/forkJoin");
var router_1 = require("@angular/router");
var JobBoardFormComponent = (function () {
    function JobBoardFormComponent(jobBoardService, fb, route, router) {
        var _this = this;
        this.jobBoardService = jobBoardService;
        this.route = route;
        this.router = router;
        this.board = {
            id: 0,
            name: '',
            isEmailApply: false,
            isOnlineApply: false
        };
        route.params.subscribe(function (p) {
            _this.board.id = +p['id'];
        });
        this.form = fb.group({
            id: [],
            name: ['', [forms_1.Validators.required]],
            isOnlineApply: ['', []],
            isEmailApply: ['', []]
        });
    }
    JobBoardFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.board.id) {
            this.jobBoardService.getBoard(this.board.id)
                .subscribe(function (b) { return _this.board = b; });
        }
    };
    Object.defineProperty(JobBoardFormComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobBoardFormComponent.prototype, "isOnlineApply", {
        get: function () { return this.form.get('isOnlineApply'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobBoardFormComponent.prototype, "isEmailApply", {
        get: function () { return this.form.get('isEmailApply'); },
        enumerable: true,
        configurable: true
    });
    JobBoardFormComponent.prototype.submit = function () {
        var _this = this;
        if (!this.board.id) {
            this.jobBoardService.create(this.form.value)
                .subscribe(function (a) { _this.router.navigate(['/board/boards']); });
        }
        else {
            this.jobBoardService.update(this.board.id, this.form.value)
                .subscribe(function (a) { _this.router.navigate(['/board/boards']); });
        }
    };
    return JobBoardFormComponent;
}());
JobBoardFormComponent = __decorate([
    core_1.Component({
        selector: 'app-job-board-form',
        templateUrl: './job-board-form.component.html',
        styleUrls: ['./job-board-form.component.css']
    }),
    __metadata("design:paramtypes", [job_board_service_1.JobBoardService, forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], JobBoardFormComponent);
exports.JobBoardFormComponent = JobBoardFormComponent;
//# sourceMappingURL=job-board-form.component.js.map