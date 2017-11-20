import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
    //private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
    private endpoint = 'http://localhost:59253';
    constructor(private http: Http) { }

    getRoles() {
        return this.http.get(this.endpoint + '/account/roles')
            .map(res => res.json()
            );
    }

    create(user) {
        return this.http.post(this.endpoint + '/account/register', user);
    }

    getUsersWithRole() {
        return this.http.get(this.endpoint + '/account/getUsersWithRoles')
            .map(res => res.json()
            );
    }

    edit(editUserRole) {
        return this.http.post(this.endpoint + '/account/editUserRole', editUserRole);
    }

    getUserWithRoleByEmail(email) {
        return this.http.get(this.endpoint + '/account/getUserByEmail/' + email)
            .map(res => res.json());
    }
}
