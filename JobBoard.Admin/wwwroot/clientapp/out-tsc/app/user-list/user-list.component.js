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
require("rxjs/add/Observable/forkJoin");
var UserListComponent = (function () {
    function UserListComponent(accountService) {
        this.accountService = accountService;
        this.editUser = {};
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUsersWithRole()
            .subscribe(function (usersWithRole) { _this.usersWithRole = usersWithRole; });
    };
    UserListComponent.prototype.banUser = function (email) {
        this.editUser.email = email;
        this.editUser.role = "NoAccess";
        this.accountService.edit(this.editUser)
            .subscribe(function (a) { return console.log(a); });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.css']
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map