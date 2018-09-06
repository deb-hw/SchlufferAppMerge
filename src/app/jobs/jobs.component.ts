import { Component, OnInit } from "@angular/core";
import { JobsService } from "./jobs.service";
import { Jobs } from "./jobs";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"]
})
// export class JobsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class JobsComponent implements OnInit {
  jobs: Jobs = new Jobs();

  addJobs() {
    this.jobsServiceService.addJobs(this.jobs);
    this.jobs = new Jobs();
  }

  constructor(private jobsServiceService: JobsService) {}

  ngOnInit() {}
}
