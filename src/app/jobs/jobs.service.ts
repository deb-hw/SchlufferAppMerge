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
  url: string = "http://localhost:8080/jobs";

  jobList: Jobs[] = [];
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

  constructor(private http: HttpClient) {}
}
