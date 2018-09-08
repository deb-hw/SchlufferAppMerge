import { Component, OnInit } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppService } from "../../app.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SocketService } from "../socket.service";
import { ToastrService } from "ngx-toastr";
import {
  AuthService,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angular5-social-login";

@Component({
  selector: "app-login",
  template: `
  <app-alerts></app-alerts>
  `,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  hide = true;
  public email: string;
  public password: string;
  user = {};
  value;
  socialPlatformProvider;
  userId;
  data;

  constructor(
    private fb: FormBuilder,
    private socketService: SocketService,
    private appService: AppService,
    private toastr: ToastrService,
    private _route: Router,
    private socialAuthservice: AuthService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("userId")) {
      this._route.navigate(["profile"]);
    }
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  socialSignIn(socialPlatform: string) {
    if (socialPlatform == "facebook") {
      this.socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      this.socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthservice
      .signIn(this.socialPlatformProvider)
      .then(userData => {
        console.log(socialPlatform + "sign in data : ", userData);
        this._route.navigate(["profile"]);
        this.toastr.success("Sign In Successful");
      });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(this.form.value);
    this.appService.logIn(this.form.value).subscribe(data => {
      console.log(data);
      localStorage.setItem("userId", data.userId);
      this.toastr.success("Sign In Successful");
      this._route.navigate(["profile"]);
    });
    if (this.form.valid) {
      this.socketService.logIn(this.form.value); // Need something that says "password and/or username incorrect"
      this.formSubmitAttempt = true;
    } else {
      this.formSubmitAttempt = false || null;
      this.toastr.error("Sign In Not Successful");
    }
  }
}
