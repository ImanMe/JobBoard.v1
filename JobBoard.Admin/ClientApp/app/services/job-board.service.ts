import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobBoardService {

    private endpoint = 'http://localhost:59253/api/';
    constructor(private http: Http) { }

    getBoards() {
        return this.http.get(this.endpoint + 'jobboards')
            .map(res => res.json()
            );
    }
}
