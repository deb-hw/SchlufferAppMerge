import { Injectable } from "@angular/core";
import { Jobs } from "./jobs";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
// export class JobsService {

//   constructor() { }
// }
export class JobsService {
  updateJobs(): any {
    throw new Error("Method not implemented.");
  }
  jobsService: any;
  updateJob(): any {
    throw new Error("Method not implemented.");
  }
  url: string = "http://localhost:8080/jobs";

  jobsList: Jobs[] = [];
  searchFilter: string;

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.url);
  }
  addJobs(jobs: Jobs) {
    this.http.post(this.url, jobs).subscribe();
  }
  removeJobs(id: number) {
    this.http.delete(this.url + "/" + id).subscribe();
  }
  editJobs(id: number, jobs: Jobs) {
    // this.jobsService.editJobs(id, jobs);
    this.http.put(this.url + "/" + id, jobs).subscribe();
  }

  constructor(private http: HttpClient) {}
}
