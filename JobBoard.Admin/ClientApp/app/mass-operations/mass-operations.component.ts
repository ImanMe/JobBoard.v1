import { Component, OnInit } from '@angular/core';
import { JobService } from './../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mass-operations',
  templateUrl: './mass-operations.component.html',
  styleUrls: ['./mass-operations.component.css']
})
export class MassOperationsComponent implements OnInit {

    constructor(private jobService: JobService,
        private route: ActivatedRoute,
        private router: Router) { }
  isNumberFirst: boolean = true;
  isNumberSecond: boolean = true;

  ngOnInit() {
  }

  massExpire(podId) {
      if (isNaN(podId.value)) this.isNumberFirst = false;
      else {
          console.log(podId.value);
          this.jobService.massExpire(podId.value)
              .subscribe(a => { this.router.navigate(['/board/jobs']) }
              , error => this.router.navigate(['/board/jobs']));
      }      
  }

  massDelete(podId) {
      if (isNaN(podId.value)) this.isNumberSecond = false;
      else {
          this.jobService.massDelete(podId.value)
              .subscribe(a => { this.router.navigate(['/board/jobs']) }
              , error => this.router.navigate(['/board/jobs']));
      }
  }
}
