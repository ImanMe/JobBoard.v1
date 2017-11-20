import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordMatchValidator } from './../validators/password-match.validator';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
    form;
    roles;
    email;
    user = {};

    constructor(private accountService: AccountService,
        fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {
        route.params.subscribe(p => {
            this.email = p['id'];
        });
        
        this.form = fb.group({
                email: ['', [Validators.required, Validators.email]],
                roleName: ['', [Validators.required]]
            });
    }

    ngOnInit() {

        this.accountService.getRoles().subscribe(r => this.roles=r);
        
        this.accountService.getUserWithRoleByEmail(this.email).subscribe(u => this.user = u);
    }

    get roleName() { return this.form.get('roleName'); }

    
    submit() {
        this.accountService.edit(this.user)
            .subscribe(a => this.router.navigate(['/admin/users']));
    }
}
