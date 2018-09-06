import { Component, OnInit } from "@angular/core";
import { SocketService } from "../../user/socket.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  styles: [
    `
      .navbar-brand {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
      }
      .fill-remaining-space {
        flex: 1 1 auto;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {
  // navbarOpen = false;

  // toggleNavbar() {
  //   this.navbarOpen = !this.navbarOpen;
  // }

  isLoggedIn$: Observable<boolean>;

  constructor(private _route: Router, private socketService: SocketService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.socketService.isLoggedIn; // {2}
  }

  onLogout() {
    localStorage.removeItem("userId");
    this.socketService.logOut();
    this._route.navigate(["login"]);
  }
}
