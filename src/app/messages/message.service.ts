import { Injectable } from "@angular/core";
import { Message } from "./message";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  public socket;
  public baseUrl = "http://localhost:8080/messages";

  message: string[] = [];

  getMessage(toUser: string): Observable<Message> {
    return this.http.get<Message>(this.baseUrl + "/" + toUser);
  }

  addMessage(message: Message, author: string) {
    return this.http.post(this.baseUrl + "/send", message);
  }

  constructor(private http: HttpClient, private cookieService: CookieService) {}
}
// I received this error message: Response to preflight request doesn't pass access control check.
// related to CORS
// I added this to my browser (https://chrome.google.com/webstore/detail/allow-control-allow-origi)
// Now Getting following Error: Response for preflight has invalid HTTP status code 403.
