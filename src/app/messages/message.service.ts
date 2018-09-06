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

  addMessage(messages: Message, author: string) {
    return this.http.post(this.baseUrl, this.message);
  }

  constructor(private http: HttpClient, private cookieService: CookieService) {}
}
