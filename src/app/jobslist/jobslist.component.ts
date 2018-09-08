import { Component, OnInit } from "@angular/core";
import { Jobs } from "../jobs/jobs";
import { JobsService } from "../jobs/jobs.service";

@Component({
  selector: "app-jobslist",
  templateUrl: "./jobslist.component.html",
  styleUrls: ["./jobslist.component.css"]
})
// export class JobslistComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class JobsListComponent implements OnInit {
  jobsList: Jobs[] = [];

  getJobs(): void {
    this.jobsService.getJobs().subscribe(data => (this.jobsList = data));
  }
  deleteJobs(id: number) {
    this.jobsService.removeJobs(id);
  }
  updateJobs(): void {
    this.jobsService.updateJobs().subscribe(data => (this.jobsList = data));
  }

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.getJobs();
  }
}
