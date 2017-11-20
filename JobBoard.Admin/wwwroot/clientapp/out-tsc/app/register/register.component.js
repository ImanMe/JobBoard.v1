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
var account_service_1 = require("./../services/account.service");
var forms_1 = require("@angular/forms");
require("rxjs/add/Observable/forkJoin");
var router_1 = require("@angular/router");
var password_match_validator_1 = require("./../validators/password-match.validator");
var RegisterComponent = (function () {
    function RegisterComponent(accountService, fb, route, router) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.form = fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required],
            roleName: ['', [forms_1.Validators.required]]
        }, {
            validator: password_match_validator_1.PasswordMatchValidator.matchPassword
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getRoles()
            .subscribe(function (roles) { _this.roles = roles; });
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.form.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () { return this.form.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "roleName", {
        get: function () { return this.form.get('roleName'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.accountService.create(this.form.value)
            .subscribe(function (a) { console.log(a), _this.router.navigate(['/admin/users']); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map