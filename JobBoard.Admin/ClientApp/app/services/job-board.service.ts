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

    getBoard(id) {
        return this.http.get(this.endpoint + 'jobboards/' + id)
            .map(res => res.json()
            );
    }

    create(board) {
        return this.http.post(this.endpoint + 'JobBoards', board);
    }

    update(id, board) {
        return this.http.put(this.endpoint + 'JobBoards/' + id, board);

    }

    delete(id) {
        return this.http.delete(this.endpoint + 'JobBoards/' + id);
    }
}
