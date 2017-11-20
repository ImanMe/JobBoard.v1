"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var job_list_component_1 = require("./job-list/job-list.component");
var job_board_list_component_1 = require("./job-board-list/job-board-list.component");
var navbar_component_1 = require("./navbar/navbar.component");
var job_form_component_1 = require("./job-form/job-form.component");
var job_service_1 = require("./services/job.service");
var job_board_service_1 = require("./services/job-board.service");
var account_service_1 = require("./services/account.service");
var pagination_component_1 = require("./pagination/pagination.component");
var forms_1 = require("@angular/forms");
var summary_pipe_1 = require("./summary.pipe");
var http_1 = require("@angular/http");
var register_component_1 = require("./register/register.component");
var user_list_component_1 = require("./user-list/user-list.component");
var edit_role_component_1 = require("./edit-role/edit-role.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            job_list_component_1.JobListComponent,
            job_board_list_component_1.JobBoardListComponent,
            navbar_component_1.NavbarComponent,
            job_form_component_1.JobFormComponent,
            pagination_component_1.PaginationComponent,
            summary_pipe_1.SummaryPipe,
            register_component_1.RegisterComponent,
            user_list_component_1.UserListComponent,
            edit_role_component_1.EditRoleComponent
        ],
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'admin/jobs', pathMatch: 'full' },
                { path: 'admin/jobs', component: job_list_component_1.JobListComponent },
                { path: 'admin/jobs/create', component: job_form_component_1.JobFormComponent },
                { path: 'admin/jobs/edit/:id', component: job_form_component_1.JobFormComponent },
                { path: 'admin/jobs/clone/:id', component: job_form_component_1.JobFormComponent },
                { path: 'admin/boards', component: job_board_list_component_1.JobBoardListComponent },
                { path: 'admin/users/register', component: register_component_1.RegisterComponent },
                { path: 'admin/users/editRole/:id', component: edit_role_component_1.EditRoleComponent },
                { path: 'admin/users', component: user_list_component_1.UserListComponent },
                { path: '**', redirectTo: 'admin/jobs' }
            ], { useHash: true, enableTracing: false })
        ],
        providers: [
            job_service_1.JobService,
            account_service_1.AccountService,
            job_board_service_1.JobBoardService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map