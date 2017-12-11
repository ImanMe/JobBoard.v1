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
var JobService = (function () {
    function JobService(http) {
        this.http = http;
        //private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
        this.endpoint = 'http://localhost:59253/api/';
    }
    JobService.prototype.getJobs = function (filter) {
        return this.http.get(this.endpoint + 'jobs' + '?' + this.toQueryString(filter))
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get(this.endpoint + 'jobs/' + id)
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    };
    JobService.prototype.getSalaryTypes = function () {
        return this.http.get(this.endpoint + 'salarytypes')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getJobBoards = function () {
        return this.http.get(this.endpoint + 'jobboards')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getEmploymentTypes = function () {
        return this.http.get(this.endpoint + 'employmenttypes')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getCategories = function () {
        return this.http.get(this.endpoint + 'categories')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getOccupations = function () {
        return this.http.get(this.endpoint + 'occupations')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getCountriesWithStates = function () {
        return this.http.get(this.endpoint + 'countries?includestates=true')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.create = function (job) {
        return this.http.post(this.endpoint + 'jobs', job);
    };
    JobService.prototype.update = function (job) {
        return this.http.put(this.endpoint + 'jobs' + '/' + job.id, job);
    };
    JobService.prototype.delete = function (id) {
        return this.http.delete(this.endpoint + 'jobs' + '/' + id);
    };
    JobService.prototype.expire = function (id) {
        return this.http.get(this.endpoint + 'jobs/expire/' + id);
    };
    JobService.prototype.massDelete = function (podId) {
        return this.http.get(this.endpoint + 'jobs/BatchDeleteByPodId/' + podId);
    };
    JobService.prototype.massExpire = function (podId) {
        return this.http.get(this.endpoint + 'jobs/BatchExpireByPodId/' + podId);
    };
    return JobService;
}());
JobService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map