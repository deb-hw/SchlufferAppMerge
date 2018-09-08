import { Component, OnInit } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SocketService } from "../socket.service";
import { ToastrService } from "ngx-toastr";
import { AppService } from "../../app.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user";

@Component({
  selector: "app-profile",
  template: "<p>Yay! Your Logged In!</p>",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [SocketService]
})
export class ProfileComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;
  currentProfile: User = new User();
  isLoggedIn: Observable<boolean>;

  public authToken: any;
  public userInfo: any;
  public userId: any;
  public disconnectedSocket: boolean;

  constructor(
    private toastr: ToastrService,
    private appService: AppService,
    private _route: Router,
    private cookieService: CookieService,
    private socketService: SocketService
  ) {}

  profile: User;
  // profilePic: string;

  getProfile() {
    this.socketService.getProfile(this.userId).subscribe(p => {
      this.profile = p;
      this.currentProfile = p;
      // this.profilePic = p.image;
    });
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.getProfile();
    this.isLoggedIn = this.socketService.isLoggedIn;
  }
  onLogout() {
    localStorage.removeItem("userId");
    this.socketService.logOut();
    this.toastr.error("You Are Logged Out!");
    this._route.navigate(["login"]);
  }
}
