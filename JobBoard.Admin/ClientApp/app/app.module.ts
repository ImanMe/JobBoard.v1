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
    EditRoleComponent
  ],
  imports: [
      HttpModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,   
      RouterModule.forRoot([
          { path: '', redirectTo: 'admin/jobs', pathMatch: 'full' },
          { path: 'admin/jobs', component: JobListComponent },
          { path: 'admin/jobs/create', component: JobFormComponent },
          { path: 'admin/jobs/edit/:id', component: JobFormComponent },
          { path: 'admin/jobs/clone/:id', component: JobFormComponent },
          { path: 'admin/boards', component: JobBoardListComponent }, 
          { path: 'admin/users/register', component: RegisterComponent },
          { path: 'admin/users/editRole/:id', component: EditRoleComponent }, 
          { path: 'admin/users', component: UserListComponent }, 
          { path: '**', redirectTo: 'admin/jobs' }
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
