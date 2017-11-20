import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordMatchValidator } from './../validators/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 roles;
 form;
  constructor(
private accountService: AccountService, fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {
      this.form = fb.group({
              email: ['', [Validators.required, Validators.email]],
              password: ['', [Validators.required, Validators.minLength(6)]],
              confirmPassword: ['', Validators.required],
              roleName: ['', [Validators.required]]
          },
          {
              validator: PasswordMatchValidator.matchPassword
          });
  }
    
  ngOnInit() {
      this.accountService.getRoles()
          .subscribe(roles => { this.roles = roles });
  }

    get email() { return this.form.get('email'); }
    get password() { return this.form.get('password'); }
    get confirmPassword() { return this.form.get('confirmPassword'); }
    get roleName() { return this.form.get('roleName'); }

    submit() {
        this.accountService.create(this.form.value)
            .subscribe(a => {console.log(a),this.router.navigate(['/admin/users'])});
    }

}
