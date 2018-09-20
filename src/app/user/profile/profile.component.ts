import { Component, OnInit } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AvatarModule } from "ng2-avatar";
import { SocketService } from "../socket.service";
import { ToastrService } from "ngx-toastr";
import { AppService } from "../../app.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user";
// import { AvatarSubstringService } from "../../avatar-substring.service";

@Component({
  selector: "app-profile",
  // template: "<p>Yay! You're Logged In!</p>",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [SocketService]
})
export class ProfileComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;
  currentProfile: User = new User();
  isLoggedIn: Observable<boolean>;

  // ngOnInit
  // username.substring (0,1)

  public authToken: any;
  public userInfo: any;
  public userId: any;
  public disconnectedSocket: boolean;
  public avatar: string;
  username: string;
  usernameInput: string;
  newUser: User;

  constructor(
    private toastr: ToastrService,
    private appService: AppService,
    private _route: Router,
    private cookieService: CookieService,
    private socketService: SocketService // private _AvatarSubstringService: AvatarSubstringService
  ) {}

  profile: User;
  firstLetter = "a";
  // profilePic: string;

  getProfile() {
    this.socketService.getProfile(this.userId).subscribe(p => {
      console.log(p);
      this.profile = this.currentProfile;
      this.currentProfile = p;
      this.firstLetter = p.username.substring(0, 1);
      console.log(this.firstLetter);
      // this.avatar = p.substring;
      // console.log(p.substring);
    });
  }

  onSubmit() {
    this.newUser = this.currentProfile;
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
