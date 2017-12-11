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
var job_board_form_component_1 = require("./job-board-form/job-board-form.component");
var mass_operations_component_1 = require("./mass-operations/mass-operations.component");
var reports_component_1 = require("./reports/reports.component");
var active_report_component_1 = require("./active-report/active-report.component");
var inactive_report_component_1 = require("./inactive-report/inactive-report.component");
var createdby_report_component_1 = require("./createdby-report/createdby-report.component");
var evergreen_report_component_1 = require("./evergreen-report/evergreen-report.component");
var not_found_error_component_1 = require("./not-found-error/not-found-error.component");
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
            edit_role_component_1.EditRoleComponent,
            job_board_form_component_1.JobBoardFormComponent,
            mass_operations_component_1.MassOperationsComponent,
            reports_component_1.ReportsComponent,
            active_report_component_1.ActiveReportComponent,
            inactive_report_component_1.InactiveReportComponent,
            createdby_report_component_1.CreatedbyReportComponent,
            evergreen_report_component_1.EvergreenReportComponent,
            not_found_error_component_1.NotFoundErrorComponent
        ],
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'board/jobs', pathMatch: 'full' },
                { path: 'board/jobs', component: job_list_component_1.JobListComponent },
                { path: 'board/jobs/create', component: job_form_component_1.JobFormComponent },
                { path: 'board/jobs/edit/:id', component: job_form_component_1.JobFormComponent },
                { path: 'board/jobs/clone/:id', component: job_form_component_1.JobFormComponent },
                { path: 'board/jobs/batch', component: mass_operations_component_1.MassOperationsComponent },
                { path: 'board/boards', component: job_board_list_component_1.JobBoardListComponent },
                { path: 'board/boards/form', component: job_board_form_component_1.JobBoardFormComponent },
                { path: 'board/boards/form/:id', component: job_board_form_component_1.JobBoardFormComponent },
                { path: 'board/users/register', component: register_component_1.RegisterComponent },
                { path: 'board/users/editRole/:id', component: edit_role_component_1.EditRoleComponent },
                { path: 'board/reports', component: reports_component_1.ReportsComponent },
                { path: 'board/users', component: user_list_component_1.UserListComponent },
                { path: 'notfound', component: not_found_error_component_1.NotFoundErrorComponent },
                { path: '**', redirectTo: 'notfound' }
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