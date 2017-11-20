webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    font-size: smaller;\r\n    color: gray;\r\n    position: fixed;\r\n    bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"body-content\">\r\n    <router-outlet></router-outlet>\r\n    \r\n    <footer>\r\n        <p>&copy; 2017 - Job Window</p>\r\n    </footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_list_job_list_component__ = __webpack_require__("../../../../../ClientApp/app/job-list/job-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_board_list_job_board_list_component__ = __webpack_require__("../../../../../ClientApp/app/job-board-list/job-board-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../ClientApp/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_form_job_form_component__ = __webpack_require__("../../../../../ClientApp/app/job-form/job-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_job_service__ = __webpack_require__("../../../../../ClientApp/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_job_board_service__ = __webpack_require__("../../../../../ClientApp/app/services/job-board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_account_service__ = __webpack_require__("../../../../../ClientApp/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pagination_pagination_component__ = __webpack_require__("../../../../../ClientApp/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__summary_pipe__ = __webpack_require__("../../../../../ClientApp/app/summary.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../ClientApp/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_list_user_list_component__ = __webpack_require__("../../../../../ClientApp/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_role_edit_role_component__ = __webpack_require__("../../../../../ClientApp/app/edit-role/edit-role.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__job_list_job_list_component__["a" /* JobListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__job_board_list_job_board_list_component__["a" /* JobBoardListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__job_form_job_form_component__["a" /* JobFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__summary_pipe__["a" /* SummaryPipe */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__edit_role_edit_role_component__["a" /* EditRoleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'admin/jobs', pathMatch: 'full' },
                    { path: 'admin/jobs', component: __WEBPACK_IMPORTED_MODULE_4__job_list_job_list_component__["a" /* JobListComponent */] },
                    { path: 'admin/jobs/create', component: __WEBPACK_IMPORTED_MODULE_7__job_form_job_form_component__["a" /* JobFormComponent */] },
                    { path: 'admin/jobs/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__job_form_job_form_component__["a" /* JobFormComponent */] },
                    { path: 'admin/jobs/clone/:id', component: __WEBPACK_IMPORTED_MODULE_7__job_form_job_form_component__["a" /* JobFormComponent */] },
                    { path: 'admin/boards', component: __WEBPACK_IMPORTED_MODULE_5__job_board_list_job_board_list_component__["a" /* JobBoardListComponent */] },
                    { path: 'admin/users/register', component: __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */] },
                    { path: 'admin/users/editRole/:id', component: __WEBPACK_IMPORTED_MODULE_17__edit_role_edit_role_component__["a" /* EditRoleComponent */] },
                    { path: 'admin/users', component: __WEBPACK_IMPORTED_MODULE_16__user_list_user_list_component__["a" /* UserListComponent */] },
                    { path: '**', redirectTo: 'admin/jobs' }
                ], { useHash: true, enableTracing: false })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_job_service__["a" /* JobService */],
                __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_9__services_job_board_service__["a" /* JobBoardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/edit-role/edit-role.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n    color: gray;\r\n    font-size: small;\r\n}\r\n\r\n.fa-asterisk {\r\n    font-size: x-small;\r\n}\r\n\r\n.text-muted {\r\n    font-size: small;\r\n    font-style: italic;\r\n}\r\n\r\n.head {\r\n    font-size: x-large;\r\n    font-weight: 400;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/edit-role/edit-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n            <p class=\"head\">Edit User's Role</p>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a class=\"btn btn-default btn-sm\" [routerLink]=\"['/admin/users']\">Cancel</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email </label> <span class=\"fa fa-asterisk text-danger\"></span>\r\n                <input [attr.disabled]=\"true\" formControlName=\"email\" name=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"roleName\">Change Role</label> <span class=\"fa fa-asterisk text-danger\"></span>\r\n                <select formControlName=\"roleName\" name=\"roleName\" id=\"roleName\" class=\"form-control\" [(ngModel)]=\"user.role\">\r\n                    <option></option>\r\n                    <option *ngFor=\"let role of roles\" [value]=\"role.name\">{{role.name}}</option>\r\n                </select>\r\n                <div *ngIf=\"!roleName?.valid && roleName?.touched\">\r\n                    <span class=\"text-muted\" *ngIf=\"roleName.errors?.required\">Role is required.</span>\r\n                </div>\r\n            </div>\r\n            <br />\r\n\r\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-success btn-block\">Save</button>\r\n            <!--<p>{{form.value | json}}-->\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/edit-role/edit-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../ClientApp/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/Observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email]],
            roleName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]]
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
            .subscribe(function (a) { return _this.router.navigate(['/admin/users']); });
    };
    EditRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-role',
            template: __webpack_require__("../../../../../ClientApp/app/edit-role/edit-role.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/edit-role/edit-role.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], EditRoleComponent);
    return EditRoleComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/job-board-list/job-board-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td, th {\r\n    vertical-align: middle !important;\r\n    white-space: nowrap;\r\n}\r\n\r\nth {\r\n    color: gray;\r\n}\r\n\r\n.actionBtn {\r\n    padding: 2px 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/job-board-list/job-board-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n            <h4>Job Board</h4>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a class=\"btn btn-success btn-sm\" [routerLink]=\"['/admin/boards/create']\">Create New</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <br>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-condensed\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"text-center\">Actions</th>\r\n                    <th>Id</th>\r\n                    <th>Name</th>\r\n                    <th class=\"text-center\">Online Apply</th>\r\n                    <th class=\"text-center\">Email Apply</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let board of boards\">\r\n                    <td class=\"text-center\">\r\n                        <button title=\"Edit\" class=\"btn btn-warning btn-sm actionBtn\">\r\n                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button title=\"Delete\" class=\"btn btn-danger btn-sm actionBtn\">\r\n                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </td>\r\n                    <td>{{board.id}}</td>\r\n                    <td>{{board.name}}</td>\r\n                    <td class=\"text-center\"><span class=\"fa\" [ngClass]=\"{\r\n              'fa-check text-success':board.isOnlineApply,\r\n              'fa-times text-danger':!board.isOnlineApply\r\n            }\"></span></td>\r\n                    <td class=\"text-center\">\r\n                        <span class=\"fa\" [ngClass]=\"{\r\n              'fa-check text-success':board.isEmailApply,\r\n              'fa-times text-danger':!board.isEmailApply\r\n            }\"></span>\r\n                    </td>\r\n\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/job-board-list/job-board-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobBoardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_board_service__ = __webpack_require__("../../../../../ClientApp/app/services/job-board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobBoardListComponent = (function () {
    function JobBoardListComponent(boardService) {
        this.boardService = boardService;
    }
    JobBoardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardService.getBoards()
            .subscribe(function (boards) { return _this.boards = boards; });
    };
    JobBoardListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-board-list',
            template: __webpack_require__("../../../../../ClientApp/app/job-board-list/job-board-list.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/job-board-list/job-board-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_job_board_service__["a" /* JobBoardService */]])
    ], JobBoardListComponent);
    return JobBoardListComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/job-form/job-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/job-form/job-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  job-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../ClientApp/app/job-form/job-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobFormComponent = (function () {
    function JobFormComponent() {
    }
    JobFormComponent.prototype.ngOnInit = function () {
    };
    JobFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-form',
            template: __webpack_require__("../../../../../ClientApp/app/job-form/job-form.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/job-form/job-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobFormComponent);
    return JobFormComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/job-list/job-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th, td {\r\n    white-space: nowrap;\r\n    min-width: 55px;\r\n}\r\n\r\n.createdByTh {\r\n    min-width: 95px !important;\r\n}\r\n\r\n.actionBtn {\r\n    padding: 2px 7px;\r\n}\r\n\r\n.arrow {\r\n    cursor: pointer;\r\n}\r\n\r\nth {\r\n    font-size: 11px;\r\n    cursor: pointer;\r\n}\r\n\r\ntd {\r\n    font-size: 12px;\r\n    vertical-align: middle !important;\r\n}\r\n\r\ninput {\r\n    padding: 0;\r\n    font-family: Arial, FontAwesome;\r\n    border-width: 1px;\r\n    border-radius: 0;\r\n    padding-left: 2px;\r\n}\r\n\r\n.filterselect {\r\n    padding: 0;\r\n    font-size: 10px;\r\n    min-width: 55px;\r\n    border-width: 1px;\r\n    border-radius: 0;\r\n}\r\n\r\n    .filterselect:focus {\r\n        border-right: 0;\r\n        border-left: 0;\r\n        border-top: 0;\r\n        border-radius: 0;\r\n        border-bottom: 1px solid;\r\n    }\r\n\r\ninput:focus {\r\n    border-right: 0;\r\n    border-left: 0;\r\n    border-top: 0;\r\n    border-radius: 0;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.fa-filter {\r\n    color: #a9a9a9;\r\n}\r\n\r\n.btntd {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.inputtd {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    padding-left: 1px;\r\n    padding-right: 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/job-list/job-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<a class=\"btn btn-success btn-sm pull-right\" [routerLink]=\"['/admin/jobs/create']\">Create New</a>-->\n<div class=\"text-center\" *ngIf=\"!isDataLoaded\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x text-muted\" aria-hidden=\"true\"></i></div>\r\n<div *ngIf=\"isDataLoaded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"pull-left\">\r\n            <h4 style=\"text-transform: capitalize\">{{query.listtype}}</h4>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a style=\"margin-left:4px;\" class=\"btn btn-success btn-sm\" [routerLink]=\"['/admin/jobs/create']\">Create New</a>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <select (change)=\"onFilterChange()\" [(ngModel)]=\"query.listtype\" class=\"btn btn-default btn-sm\">\r\n                <option value=\"\"></option>\r\n                <option value=\"conversion\">Conversion</option>\r\n                <option value=\"listing\">Listing</option>\r\n                <option value=\"duplicate\">duplicate</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <br>\r\n        <table class=\"table table-hover table-condensed\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\">Actions</th>\r\n                    <th><span (click)=\"sortBy('id')\">Id</span></th>\r\n                    <th><span (click)=\"sortBy('isactive')\">Status</span></th>\r\n                    <th><span (click)=\"sortBy('clonefromid')\">CL</span></th>\r\n                    <th><span (click)=\"sortBy('evergreenid')\">EG</span></th>\r\n                    <th><span (click)=\"sortBy('schedulingpod')\">POD</span></th>\r\n                    <th><span (click)=\"sortBy('officeid')\">Office</span></th>\r\n                    <th>\r\n                        <span class=\"pull-left\" (click)=\"sortBy('title')\">Title</span><span (click)=\"titleToggle()\" class=\"fa fa-lg text-primary pull-right arrow\"\r\n                                                                                            [ngClass]=\"{\r\n          'fa-angle-double-right':!isTitleExpanded,\r\n          'fa-angle-double-left':isTitleExpanded\r\n        }\"></span>\r\n                    </th>\r\n                    <th><span (click)=\"sortBy('jobboard')\">Job Board</span></th>\r\n                    <th><span (click)=\"sortBy('division')\">Division</span></th>\r\n                    <th><span (click)=\"sortBy('city')\">City</span></th>\r\n                    <th><span (click)=\"sortBy('state')\">State</span></th>\r\n                    <th><span (click)=\"sortBy('country')\">Country</span></th>\r\n                    <th><span (click)=\"sortBy('category')\">Category</span></th>\r\n                    <th><span (click)=\"sortBy('company')\">Company</span></th>\r\n                    <th><span (click)=\"sortBy('apscl')\">ApsCl</span></th>\r\n                    <th><span (click)=\"sortBy('bob')\">BOB</span></th>\r\n                    <th><span (click)=\"sortBy('intvs2')\">2nds</span></th>\r\n                    <th><span (click)=\"sortBy('intvs')\">Intvs</span></th>\r\n                    <th><span (click)=\"sortBy('activationdate')\">Activation</span></th>\r\n                    <th><span (click)=\"sortBy('expirationdate')\">Expiration</span></th>\r\n                    <th class=\"createdByTh\">\r\n                        <span class=\"pull-left\" (click)=\"sortBy('createdby')\">CreatedBy</span><span (click)=\"createdByToggle()\" class=\"fa fa-lg text-primary pull-right arrow\"\r\n                                                                                                    [ngClass]=\"{\r\n            'fa-angle-double-right':!isCreatedByExpanded,\r\n            'fa-angle-double-left':isCreatedByExpanded\r\n          }\"></span>\r\n                    </th>\r\n                    <th><span (click)=\"sortBy('createddate')\">Created</span></th>\r\n                    <th>ActiveFor</th>\r\n                    <th>ActiveForThisWeek</th>\r\n                    <th>\r\n                        <span class=\"pull-left\" (click)=\"sortBy('emailto')\">Email</span><span (click)=\"emailToggle()\" class=\"fa fa-lg text-primary pull-right arrow\"\r\n                                                                                              [ngClass]=\"{\r\n            'fa-angle-double-right':!isEmailExpanded,\r\n            'fa-angle-double-left':isEmailExpanded\r\n          }\"></span>\r\n                    </th>\r\n                    <th>Url</th>\r\n                </tr>\r\n                <tr class=\"inputtr\">\r\n                    <td class=\"btntd\">\r\n                        <button style=\"width:49%\" title=\"Serach\" (click)=\"onFilterChange()\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-search\"></i></button>\r\n                        <button style=\"width:49%\" title=\"Reset Filters\" (click)=\"resetFilter()\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></button>\r\n                    </td>\r\n                    <td class=\"inputtd\"><input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.id\" type=\"text\" class=\"form-control input-sm\" placeholder=\"&#xf0b0;\"></td>\r\n                    <td class=\"inputtd\">\r\n                        <select (change)=\"onFilterChange()\" [(ngModel)]=\"query.isactive\" class=\"form-control input-sm filterselect\">\r\n                            <option value=\"\"></option>\r\n                            <option value=\"true\">Active</option>\r\n                            <option value=\"false\">Expired</option>\r\n                        </select>\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.clonefrom\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.evergreenid\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.schedulingPod\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.officeId\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\"><input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.title\" type=\"text\" class=\"form-control input-sm\" placeholder=\"&#xf0b0;\"></td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.jobboard\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.division\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\"><input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.city\" type=\"text\" class=\"form-control input-sm\" placeholder=\"&#xf0b0;\"></td>\r\n                    <td class=\"inputtd\"><input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.state\" type=\"text\" class=\"form-control input-sm\" placeholder=\"&#xf0b0;\"></td>\r\n                    <td class=\"inputtd\">\r\n                        <select (change)=\"onFilterChange()\" [(ngModel)]=\"query.country\" class=\"form-control input-sm filterselect\">\r\n                            <option value=\"\"></option>\r\n                            <option value=\"Un\">US</option>\r\n                            <option value=\"CA\">CA</option>\r\n                        </select>\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.category\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.companyname\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\">\r\n                        <input (keyup.enter)=\"onFilterChange()\" [(ngModel)]=\"query.createdby\" type=\"text\" class=\"form-control input-sm\"\r\n                               placeholder=\"&#xf0b0;\">\r\n                    </td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                    <td class=\"inputtd\"></td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let job of jobs.items\">\r\n                    <td>\r\n                        <a [routerLink]=\"['/admin/jobs/edit', job.id]\" class=\"btn btn-success btn-sm actionBtn\" title=\"Edit\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\r\n                        <a [routerLink]=\"['/admin/jobs/clone', job.id]\" class=\"btn btn-info btn-sm actionBtn\" title=\"Clone\"><i class=\"fa fa-clone\" aria-hidden=\"true\"></i></a>\r\n                        <button (click)=\"expire(job.id)\" class=\"btn btn-warning btn-sm actionBtn\" [disabled]=\"!job.isActive\" title=\"Expire\"><i class=\"fa fa-times expireicon\" aria-hidden=\"true\"></i></button>\r\n                        <button (click)=\"delete(job.id,$index)\" class=\"btn btn-danger btn-sm actionBtn\" title=\"Delete\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\r\n                    </td>\r\n                    <td>{{job.id}}</td>\r\n                    <td class=\"text-center\">\r\n                        <span class=\"fa fa-lg\" [ngClass]=\"{\r\n          'fa-check text-success':job.isActive,\r\n          'fa-times text-danger':!job.isActive\r\n        }\"></span>\r\n                    </td>\r\n                    <td>{{job.CloneFrom}}</td>\r\n                    <td>{{job.everGreenId}}</td>\r\n                    <td>{{job.schedulingPod}}</td>\r\n                    <td>{{job.officeId}}</td>\r\n                    <td>{{job.title | summary:titleLength}}</td>\r\n                    <td>{{job.jobBoard}}</td>\r\n                    <td>{{job.division}}</td>\r\n                    <td>{{job.city}}</td>\r\n                    <td>{{job.state}}</td>\r\n                    <td>{{job.country}}</td>\r\n                    <td>{{job.category}}</td>\r\n                    <td>{{job.companyName}}</td>\r\n                    <td>{{job.stat?.apsCl}}</td>\r\n                    <td>{{job.stat?.bob}}</td>\r\n                    <td>{{job.stat?.intvs2}}</td>\r\n                    <td>{{job.stat?.intvs}}</td>\r\n                    <td>{{job.activationDate}}</td>\r\n                    <td>{{job.expirationDate}}</td>\r\n                    <td>{{job.createdBy | summary:createdByLength}}</td>\r\n                    <td>{{job.createdDate}}</td>\r\n                    <td><span class=\"fa fa-search\"></span></td>\r\n                    <td></td>\r\n                    <td>{{job.emailTo | summary:emailLength}}</td>\r\n                    <td><a [routerLink]=\"['/jobs/onlineapply', job.id]\">Preview</a></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <pagination [total-items]=\"jobs.totalItems\" [page-size]=\"PAGE_SIZE\" (page-changed)=\"onPageChange($event)\"></pagination>\r\n    </div>\r\n</div>\n\n"

/***/ }),

/***/ "../../../../../ClientApp/app/job-list/job-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_service__ = __webpack_require__("../../../../../ClientApp/app/services/job.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobListComponent = (function () {
    function JobListComponent(jobService) {
        this.jobService = jobService;
        this.hideTr = false;
        this.isDataLoaded = false;
        this.jobs = {};
        this.isTitleExpanded = false;
        this.titleLength = 10;
        this.isEmailExpanded = false;
        this.emailLength = 10;
        this.isCreatedByExpanded = false;
        this.createdByLength = 10;
        this.onlineUrl = 'http://board.thejobwindow.com/home/onlineapply/';
        this.PAGE_SIZE = 5;
        this.queryResult = {};
        this.query = { pageSize: this.PAGE_SIZE, listtype: "" };
        this.defaultTrue = true;
        this.statuses = [
            { value: true, name: "Active" },
            { value: false, name: "Expired" }
        ];
        this.mainSortingOrders = [
            { value: "listing", name: "Listing" },
            { value: "conversion", name: "Conversion" },
            { value: "duplicate", name: "Duplicate" },
        ];
    }
    JobListComponent.prototype.ngOnInit = function () {
        this.populateJobs();
    };
    JobListComponent.prototype.populateJobs = function () {
        var _this = this;
        this.jobService.getJobs(this.query)
            .subscribe(function (jobs) { _this.jobs = jobs, _this.isDataLoaded = true; });
    };
    JobListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.populateJobs();
    };
    JobListComponent.prototype.sortBy = function (columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateJobs();
    };
    JobListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.populateJobs();
    };
    JobListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateJobs();
    };
    JobListComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm("Are you sure?")) {
            //console.log(this.jobs);
            this.jobService.delete(id).subscribe(function (job) {
                _this.jobs.items.splice(index, 1);
                //this.toastyService.warning({
                //    title: 'Success',
                //    msg: 'Data was sucessfully Deleted.',
                //    theme: 'bootstrap',
                //    showClose: true,
                //    timeout: 3000
                //});
            });
        }
    };
    JobListComponent.prototype.expire = function (id) {
        if (id) {
            if (confirm("Are you sure?")) {
                this.jobService.expire(id).subscribe(function (job) {
                    //this.toastyService.warning({
                    //    title: 'Success',
                    //    msg: 'Job was sucessfully Expired.',
                    //    theme: 'bootstrap',
                    //    showClose: true,
                    //    timeout: 3000
                    //});
                });
            }
        }
    };
    JobListComponent.prototype.titleToggle = function () {
        this.isTitleExpanded = !this.isTitleExpanded;
        this.titleLength = this.isTitleExpanded ? 1000 : 10;
    };
    JobListComponent.prototype.emailToggle = function () {
        this.isEmailExpanded = !this.isEmailExpanded;
        this.emailLength = this.isEmailExpanded ? 1000 : 10;
    };
    JobListComponent.prototype.createdByToggle = function () {
        this.isCreatedByExpanded = !this.isCreatedByExpanded;
        this.createdByLength = this.isCreatedByExpanded ? 1000 : 10;
    };
    JobListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-list',
            template: __webpack_require__("../../../../../ClientApp/app/job-list/job-list.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/job-list/job-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\nborder-radius:0;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:focus {\r\n    /*background-color: #1b2631;*/\r\n    color: #18bc9c;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n                    aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['admin/jobs']\">The Job Window</a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Listing Management<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['admin/jobs']\">Jobs</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['admin/jobs/create']\">Create</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a href=\"#\">Stats Pending</a></li>\r\n                    </ul>\r\n                </li>                \r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Board Management<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['admin/boards']\">Job Boards</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a href=\"#\">Mass Delete</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a href=\"#\">Mass Expire</a></li>\r\n                    </ul>\r\n                </li>                                \r\n                <li [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['admin/reports']\">Reports</a></li>              \r\n                <li [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['admin/users']\">User Management</a></li> \r\n                <li [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['admin/reports']\">Applicants</a></li>              \r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"account/logout\" asp-controller=\"Account\" asp-action=\"Logout\"><i class=\"glyphicon glyphicon-log-out\"></i></a></li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</nav>"

/***/ }),

/***/ "../../../../../ClientApp/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../ClientApp/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagetag {\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"totalItems > pageSize\">\r\n    <ul class=\"pagination pagination-sm\">\r\n        <li [class.disabled]=\"currentPage == 1\">\r\n            <a class=\"pagetag\" (click)=\"previous()\" aria-label=\"Previous\">\r\n                <span aria-hidden=\"true\">&laquo;</span>\r\n            </a>\r\n        </li>\r\n        <li [class.active]=\"currentPage == page\" *ngFor=\"let page of pages\" (click)=\"changePage(page)\">\r\n            <a class=\"pagetag\" *ngIf=\"page < currentPage+5 && page > currentPage-5\">{{ page }}</a>\r\n        </li>\r\n        <li [class.disabled]=\"currentPage == pages.length\">\r\n            <a class=\"pagetag\" (click)=\"next()\" aria-label=\"Next\">\r\n                <span aria-hidden=\"true\">&raquo;</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>\n"

/***/ }),

/***/ "../../../../../ClientApp/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.currentPage = 1;
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.totalItems / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++)
            this.pages.push(i);
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('total-items'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('page-size'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('page-changed'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pagination',
            template: __webpack_require__("../../../../../ClientApp/app/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/pagination/pagination.component.css")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\r\n    color:gray;\r\n    font-size: small;\r\n}\r\n\r\n.fa-asterisk {\r\n    font-size:x-small;\r\n}\r\n\r\n.text-muted {\r\n    font-size: small;\r\n    font-style: italic;\r\n}\r\n\r\n.head {\r\n    font-size: x-large;\r\n    font-weight: 400;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n            <p class=\"head\">Register a New User</p>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a class=\"btn btn-default btn-sm\" [routerLink]=\"['/admin/users']\">Cancel</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email </label> <span class=\"fa fa-asterisk text-danger\"></span>\r\n            <input formControlName=\"email\" name=\"email\" id=\"email\" class=\"form-control\"/>\r\n            <div *ngIf=\"!email?.valid && email?.touched\">\r\n                <span class=\"text-muted\" *ngIf=\"email.errors?.required\">Email is Required.</span>\r\n                <span class=\"text-muted\" *ngIf=\"email.errors?.email && !email.errors?.required\">Email is not in valid format.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label> <span class=\"fa fa-asterisk text-danger\"></span>\r\n            <input formControlName=\"password\" name=\"password\" id=\"password\" class=\"form-control\"/>\r\n            <div *ngIf=\"!password?.valid && password?.touched\">\r\n                <span class=\"text-muted\" *ngIf=\"password.errors?.required\">Password is required.</span>\r\n                <span class=\"text-muted\" *ngIf=\"password.errors?.minlength\">Minimum length is 6 characters.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirmPassword\">Confirm Password</label> <span class=\"fa fa-asterisk text-danger\"></span>\r\n            <input formControlName=\"confirmPassword\" name=\"confirmPassword\" id=\"confirmPassword\" class=\"form-control\"/>\r\n            <div *ngIf=\"!confirmPassword?.valid && confirmPassword?.touched\">\r\n                <span class=\"text-muted\" *ngIf=\"confirmPassword.errors?.required\">Confirm password is required.</span>\r\n                <span class=\"text-muted\" *ngIf=\"confirmPassword.errors?.matchPassword\">Failed to confirm your password.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"roleName\">Assign Role</label> <span class=\"fa fa-asterisk text-danger\"></span>\r\n            <select formControlName=\"roleName\" name=\"roleName\" id=\"roleName\" class=\"form-control\">\r\n                <option></option>\r\n                <option *ngFor=\"let role of roles\" [value]=\"role.name\">{{role.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"!roleName?.valid && roleName?.touched\">\r\n                <span class=\"text-muted\" *ngIf=\"roleName.errors?.required\">Role is required.</span>\r\n            </div>\r\n        </div>\r\n            <br/>\r\n            \r\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-success btn-block\">Save</button>\r\n            <!--<p>{{form.value | json}}-->\r\n</form>\r\n    </div>\r\n</div>\n"

/***/ }),

/***/ "../../../../../ClientApp/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../ClientApp/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/Observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_password_match_validator__ = __webpack_require__("../../../../../ClientApp/app/validators/password-match.validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(accountService, fb, route, router) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.form = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            roleName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_5__validators_password_match_validator__["a" /* PasswordMatchValidator */].matchPassword
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
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../ClientApp/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        //private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
        this.endpoint = 'http://localhost:59253';
    }
    AccountService.prototype.getRoles = function () {
        return this.http.get(this.endpoint + '/account/roles')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.create = function (user) {
        return this.http.post(this.endpoint + '/account/register', user);
    };
    AccountService.prototype.getUsersWithRole = function () {
        return this.http.get(this.endpoint + '/account/getUsersWithRoles')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.edit = function (editUserRole) {
        return this.http.post(this.endpoint + '/account/editUserRole', editUserRole);
    };
    AccountService.prototype.getUserWithRoleByEmail = function (email) {
        return this.http.get(this.endpoint + '/account/getUserByEmail/' + email)
            .map(function (res) { return res.json(); });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/services/job-board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobBoardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobBoardService = (function () {
    function JobBoardService(http) {
        this.http = http;
        this.endpoint = 'http://localhost:59253/api/';
    }
    JobBoardService.prototype.getBoards = function () {
        return this.http.get(this.endpoint + 'jobboards')
            .map(function (res) { return res.json(); });
    };
    JobBoardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], JobBoardService);
    return JobBoardService;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/services/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobService = (function () {
    function JobService(http) {
        this.http = http;
        //private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
        this.endpoint = 'http://localhost:59253/api/';
    }
    JobService.prototype.getJobs = function (filter) {
        return this.http.get(this.endpoint + 'jobs' + '?' + this.toQueryString(filter))
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get(this.endpoint + 'jobs/' + id)
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    };
    JobService.prototype.getSalaryTypes = function () {
        return this.http.get(this.endpoint + 'salarytypes')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getJobBoards = function () {
        return this.http.get(this.endpoint + 'jobboards')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getEmploymentTypes = function () {
        return this.http.get(this.endpoint + 'employmenttypes')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getCategories = function () {
        return this.http.get(this.endpoint + 'categories')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getOccupations = function () {
        return this.http.get(this.endpoint + 'occupations')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.getCountriesWithStates = function () {
        return this.http.get(this.endpoint + 'countries?includestates=true')
            .map(function (res) { return res.json(); });
    };
    JobService.prototype.create = function (job) {
        return this.http.post(this.endpoint + 'jobs', job);
    };
    JobService.prototype.update = function (job) {
        return this.http.put(this.endpoint + 'jobs' + '/' + job.id, job);
    };
    JobService.prototype.delete = function (id) {
        return this.http.delete(this.endpoint + 'jobs' + '/' + id);
    };
    JobService.prototype.expire = function (id) {
        return this.http.get(this.endpoint + 'jobs/expire/' + id);
    };
    JobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/summary.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        limit = (limit) ? limit : 20;
        return value.substr(0, limit);
    };
    SummaryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td, th {\r\n    vertical-align: middle !important;\r\n    white-space: nowrap;\r\n}\r\n\r\nth {\r\n    color: gray;\r\n}\r\n\r\n.actionBtn {\r\n    padding: 2px 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n            <h4>Registered Users</h4>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a class=\"btn btn-success btn-sm\" [routerLink]=\"['/admin/users/register']\">New User</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-condensed\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"text-center\">Actions</th>\r\n                    <th>Username</th>\r\n                    <th>Role</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let user of usersWithRole\">\r\n                    <td class=\"text-center\">\r\n                        <a [routerLink]=\"['/admin/users/editRole', user.userName]\" class=\"btn btn-warning btn-sm actionBtn\" title=\"Edit Role\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\r\n                        <button [disabled]=\"user.role==='NoAccess' || user.isNoAccess\" class=\"btn btn-danger btn-sm actionBtn\" title=\"Restrict Access\" (click)=\"user.isNoAccess = !user.isNoAccess; banUser(user.userName)\"><i class=\"fa fa-ban\"></i></button>\r\n                    </td>\r\n                    <td>{{user.userName}}</td>\r\n                    <td *ngIf=\"user.isNoAccess\">NoAccess</td>\r\n                    <td *ngIf=\"!user.isNoAccess\">{{user.role}}</td>\r\n                </tr>\r\n                </tbody>       \r\n            </table>\r\n        </div>\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../ClientApp/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_Observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/Observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_Observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_Observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../ClientApp/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/validators/password-match.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMatchValidator; });
var PasswordMatchValidator = (function () {
    function PasswordMatchValidator() {
    }
    PasswordMatchValidator.matchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ matchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordMatchValidator;
}());



/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map