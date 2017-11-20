import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {
    //private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
    private endpoint = 'http://localhost:59253/api/';
    constructor(private http: Http) { }

    getJobs(filter) {
        return this.http.get(this.endpoint + 'jobs' + '?' + this.toQueryString(filter))
            .map(res => res.json()
            );
    }

    getJob(id) {
        return this.http.get(this.endpoint + 'jobs/' + id)
            .map(res => res.json()
            );
    }

    toQueryString(obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    }

    getSalaryTypes() {
        return this.http.get(this.endpoint + 'salarytypes')
            .map(res => res.json()
            );
    }

    getJobBoards() {
        return this.http.get(this.endpoint + 'jobboards')
            .map(res => res.json()
            );
    }

    getEmploymentTypes() {
        return this.http.get(this.endpoint + 'employmenttypes')
            .map(res => res.json()
            );
    }

    getCategories() {
        return this.http.get(this.endpoint + 'categories')
            .map(res => res.json()
            );
    }

    getOccupations() {
        return this.http.get(this.endpoint + 'occupations')
            .map(res => res.json()
            );
    }

    getCountriesWithStates() {
        return this.http.get(this.endpoint + 'countries?includestates=true')
            .map(res => res.json()
            );
    }

    create(job) {
        return this.http.post(this.endpoint + 'jobs', job);
    }

    update(job) {
        return this.http.put(this.endpoint + 'jobs' + '/' + job.id, job);
    }

    delete(id) {
        return this.http.delete(this.endpoint + 'jobs' + '/' + id);
    }

    expire(id) {
        return this.http.get(this.endpoint + 'jobs/expire/' + id);
    }
}
