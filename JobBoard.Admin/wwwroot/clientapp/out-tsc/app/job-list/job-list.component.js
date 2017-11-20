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
var job_service_1 = require("./../services/job.service");
var JobListComponent = (function () {
    function JobListComponent(jobService) {
        this.jobService = jobService;
        this.hideTr = false;
        this.isDataLoaded = false;
        this.jobs = {};
        this.isTitleExpanded = false;
        this.titleLength = 10;
        this.isEmailExpanded = false;
        this.emailLength = 10;
        this.isCreatedByExpanded = false;
        this.createdByLength = 10;
        this.onlineUrl = 'http://board.thejobwindow.com/home/onlineapply/';
        this.PAGE_SIZE = 5;
        this.queryResult = {};
        this.query = { pageSize: this.PAGE_SIZE, listtype: "" };
        this.defaultTrue = true;
        this.statuses = [
            { value: true, name: "Active" },
            { value: false, name: "Expired" }
        ];
        this.mainSortingOrders = [
            { value: "listing", name: "Listing" },
            { value: "conversion", name: "Conversion" },
            { value: "duplicate", name: "Duplicate" },
        ];
    }
    JobListComponent.prototype.ngOnInit = function () {
        this.populateJobs();
    };
    JobListComponent.prototype.populateJobs = function () {
        var _this = this;
        this.jobService.getJobs(this.query)
            .subscribe(function (jobs) { _this.jobs = jobs, _this.isDataLoaded = true; });
    };
    JobListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.populateJobs();
    };
    JobListComponent.prototype.sortBy = function (columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateJobs();
    };
    JobListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.populateJobs();
    };
    JobListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateJobs();
    };
    JobListComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm("Are you sure?")) {
            //console.log(this.jobs);
            this.jobService.delete(id).subscribe(function (job) {
                _this.jobs.items.splice(index, 1);
                //this.toastyService.warning({
                //    title: 'Success',
                //    msg: 'Data was sucessfully Deleted.',
                //    theme: 'bootstrap',
                //    showClose: true,
                //    timeout: 3000
                //});
            });
        }
    };
    JobListComponent.prototype.expire = function (id) {
        if (id) {
            if (confirm("Are you sure?")) {
                this.jobService.expire(id).subscribe(function (job) {
                    //this.toastyService.warning({
                    //    title: 'Success',
                    //    msg: 'Job was sucessfully Expired.',
                    //    theme: 'bootstrap',
                    //    showClose: true,
                    //    timeout: 3000
                    //});
                });
            }
        }
    };
    JobListComponent.prototype.titleToggle = function () {
        this.isTitleExpanded = !this.isTitleExpanded;
        this.titleLength = this.isTitleExpanded ? 1000 : 10;
    };
    JobListComponent.prototype.emailToggle = function () {
        this.isEmailExpanded = !this.isEmailExpanded;
        this.emailLength = this.isEmailExpanded ? 1000 : 10;
    };
    JobListComponent.prototype.createdByToggle = function () {
        this.isCreatedByExpanded = !this.isCreatedByExpanded;
        this.createdByLength = this.isCreatedByExpanded ? 1000 : 10;
    };
    return JobListComponent;
}());
JobListComponent = __decorate([
    core_1.Component({
        selector: 'app-job-list',
        templateUrl: './job-list.component.html',
        styleUrls: ['./job-list.component.css']
    }),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobListComponent);
exports.JobListComponent = JobListComponent;
//# sourceMappingURL=job-list.component.js.map