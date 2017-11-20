import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordMatchValidator } from './../validators/password-match.validator';
import { UserEdit } from './../models/UserEdit'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    usersWithRole: UserEdit[];
    editUser: any = {};
    
    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.accountService.getUsersWithRole()
            .subscribe(usersWithRole => { this.usersWithRole = usersWithRole });
    }

    banUser(email) {
        this.editUser.email = email;
        this.editUser.role = "NoAccess";
        this.accountService.edit(this.editUser)
            .subscribe(a => console.log(a));
    }

}
