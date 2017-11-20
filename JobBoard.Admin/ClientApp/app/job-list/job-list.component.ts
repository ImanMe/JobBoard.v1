import { Component, OnInit } from '@angular/core';
import { JobService } from './../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
    hideTr: boolean = false;
    isDataLoaded = false;
    jobs: any = {};
    isTitleExpanded = false;
    titleLength = 10;
    isEmailExpanded = false;
    emailLength = 10;
    isCreatedByExpanded = false;
    createdByLength = 10;
    onlineUrl = 'http://board.thejobwindow.com/home/onlineapply/';
    private readonly PAGE_SIZE = 5;
    queryResult: any = {};
    query: any = { pageSize: this.PAGE_SIZE, listtype: "" };
    defaultTrue = true;
    statuses = [
        { value: true, name: "Active" },
        { value: false, name: "Expired" }
    ];
    mainSortingOrders = [
        { value: "listing", name: "Listing" },
        { value: "conversion", name: "Conversion" },
        { value: "duplicate", name: "Duplicate" },
    ];
    constructor(private jobService: JobService) { }

    ngOnInit() {
        this.populateJobs();
    }

    private populateJobs() {
        this.jobService.getJobs(this.query)
            .subscribe(jobs => { this.jobs = jobs, this.isDataLoaded = true });

    }

    onFilterChange() {
        this.query.page = 1;
        this.populateJobs();
    }

    sortBy(columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        } else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateJobs();
    }

    onPageChange(page) {
        this.query.page = page;
        this.populateJobs();
    }

    resetFilter() {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateJobs();
    }

    delete(id, index) {
        if (confirm("Are you sure?")) {
            //console.log(this.jobs);
            this.jobService.delete(id).subscribe(job => {
                this.jobs.items.splice(index, 1);
                //this.toastyService.warning({
                //    title: 'Success',
                //    msg: 'Data was sucessfully Deleted.',
                //    theme: 'bootstrap',
                //    showClose: true,
                //    timeout: 3000
                //});

            });
        }
    }

    expire(id) {
        if (id) {
            if (confirm("Are you sure?")) {
                this.jobService.expire(id).subscribe(job => {
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

    }

    titleToggle() {
        this.isTitleExpanded = !this.isTitleExpanded;
        this.titleLength = this.isTitleExpanded ? 1000 : 10;
    }

    emailToggle() {
        this.isEmailExpanded = !this.isEmailExpanded;
        this.emailLength = this.isEmailExpanded ? 1000 : 10;
    }

    createdByToggle() {
        this.isCreatedByExpanded = !this.isCreatedByExpanded;
        this.createdByLength = this.isCreatedByExpanded ? 1000 : 10;
    }
}
