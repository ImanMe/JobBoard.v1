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
var EditRoleComponent = (function () {
    function EditRoleComponent(accountService, fb, route, router) {
        var _this = this;
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.user = {};
        route.params.subscribe(function (p) {
            _this.email = p['id'];
        });
        this.form = fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            roleName: ['', [forms_1.Validators.required]]
        });
    }
    EditRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getRoles().subscribe(function (r) { return _this.roles = r; });
        this.accountService.getUserWithRoleByEmail(this.email).subscribe(function (u) { return _this.user = u; });
    };
    Object.defineProperty(EditRoleComponent.prototype, "roleName", {
        get: function () { return this.form.get('roleName'); },
        enumerable: true,
        configurable: true
    });
    EditRoleComponent.prototype.submit = function () {
        var _this = this;
        this.accountService.edit(this.user)
            .subscribe(function (a) { return _this.router.navigate(['/board/users']); });
    };
    return EditRoleComponent;
}());
EditRoleComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-role',
        templateUrl: './edit-role.component.html',
        styleUrls: ['./edit-role.component.css']
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], EditRoleComponent);
exports.EditRoleComponent = EditRoleComponent;
//# sourceMappingURL=edit-role.component.js.map