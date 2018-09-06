import { Component, OnInit } from "@angular/core";
import { JobsService } from "../jobs/jobs.service";
import { Jobs } from "../jobs/jobs";

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

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.getJobs();
  }
}
