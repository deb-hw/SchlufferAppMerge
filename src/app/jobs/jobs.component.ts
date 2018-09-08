import { Component, OnInit } from "@angular/core";
import { Jobs } from "./jobs";
import { JobsService } from "./jobs.service";

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
    this.jobsService.addJobs(this.jobs);
    this.jobs = new Jobs();
  }
  updateJobs(): void {
    this.jobsService.updateJobs().subscribe(data => (this.jobs = data));
  }

  constructor(private jobsService: JobsService) {}

  ngOnInit() {}
}
