import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Jobs } from "../jobs/jobs";
import { JobsService } from "../jobs/jobs.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  jobs: Jobs = new Jobs();
  itemId = "";

  getJobs(): void {
    this.jobsService
      .getJobs()
      .subscribe(
        data =>
          (this.jobs = data.filter(x => x.id.toString() == this.itemId)[0])
      );
  }

  deleteJobs(id: number) {
    this.jobsService.removeJobs(id);
  }

  editJobs(id: number, jobs: Jobs) {
    this.jobsService.editJobs(id, jobs);
  }

  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute
  ) {}
  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.getCoffee();
  // }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.itemId = this.route.snapshot.paramMap.get("id");
      //new line
      this.getJobs();
    });
  }
}
