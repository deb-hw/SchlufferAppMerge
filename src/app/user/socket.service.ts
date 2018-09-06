import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  public socket;
  public baseUrl2 = "http://localhost:8080/login";
  private baseUrl = "http://localhost:8080/users";
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  getProfile(userId: number): Observable<any> {
    return this.http.get("http://localhost:8080/users/username/" + userId);
  }

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  logIn(user: User) {
    if (user.username !== "" && user.password !== "") {
      this.loggedIn.next(true);
      return this.http.get(this.baseUrl + "/" + user);
    }
  }

  logOut() {
    this.loggedIn.next(false);
  }
}
