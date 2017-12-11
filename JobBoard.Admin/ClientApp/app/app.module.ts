import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobBoardListComponent } from './job-board-list/job-board-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobService } from './services/job.service';
import { JobBoardService } from './services/job-board.service';
import { AccountService } from './services/account.service';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SummaryPipe } from './summary.pipe';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { JobBoardFormComponent } from './job-board-form/job-board-form.component';
import { MassOperationsComponent } from './mass-operations/mass-operations.component';
import { ReportsComponent } from './reports/reports.component';
import { ActiveReportComponent } from './active-report/active-report.component';
import { InactiveReportComponent } from './inactive-report/inactive-report.component';
import { CreatedbyReportComponent } from './createdby-report/createdby-report.component';
import { EvergreenReportComponent } from './evergreen-report/evergreen-report.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobBoardListComponent,
    NavbarComponent,
    JobFormComponent,
    PaginationComponent,
    SummaryPipe,
    RegisterComponent,
    UserListComponent,
    EditRoleComponent,
    JobBoardFormComponent,
    MassOperationsComponent,
    ReportsComponent,
    ActiveReportComponent,
    InactiveReportComponent,
    CreatedbyReportComponent,
    EvergreenReportComponent,
    NotFoundErrorComponent
  ],
  imports: [
      HttpModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,   
      RouterModule.forRoot([
          { path: '', redirectTo: 'board/jobs', pathMatch: 'full' },
          { path: 'board/jobs', component: JobListComponent },
          { path: 'board/jobs/create', component: JobFormComponent },
          { path: 'board/jobs/edit/:id', component: JobFormComponent },
          { path: 'board/jobs/clone/:id', component: JobFormComponent },
          { path: 'board/jobs/batch', component: MassOperationsComponent },
          { path: 'board/boards', component: JobBoardListComponent }, 
          { path: 'board/boards/form', component: JobBoardFormComponent }, 
          { path: 'board/boards/form/:id', component: JobBoardFormComponent }, 
          { path: 'board/users/register', component: RegisterComponent },
          { path: 'board/users/editRole/:id', component: EditRoleComponent },
          { path: 'board/reports', component: ReportsComponent },
          { path: 'board/users', component: UserListComponent }, 
          { path: 'notfound', component: NotFoundErrorComponent }, 
          { path: '**', redirectTo: 'notfound' }
      ],{useHash:true, enableTracing:false})
  ],
  providers: [
      JobService,
      AccountService,
      JobBoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
