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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var JobBoardService = (function () {
    function JobBoardService(http) {
        this.http = http;
        this.endpoint = 'http://localhost:59253/api/';
    }
    JobBoardService.prototype.getBoards = function () {
        return this.http.get(this.endpoint + 'jobboards')
            .map(function (res) { return res.json(); });
    };
    JobBoardService.prototype.getBoard = function (id) {
        return this.http.get(this.endpoint + 'jobboards/' + id)
            .map(function (res) { return res.json(); });
    };
    JobBoardService.prototype.create = function (board) {
        return this.http.post(this.endpoint + 'JobBoards', board);
    };
    JobBoardService.prototype.update = function (id, board) {
        return this.http.put(this.endpoint + 'JobBoards/' + id, board);
    };
    JobBoardService.prototype.delete = function (id) {
        return this.http.delete(this.endpoint + 'JobBoards/' + id);
    };
    return JobBoardService;
}());
JobBoardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JobBoardService);
exports.JobBoardService = JobBoardService;
//# sourceMappingURL=job-board.service.js.map