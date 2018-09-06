import { Component, OnInit } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrService } from "ngx-toastr";
import { AppService } from "../../app.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SocketService } from "../socket.service";

@Component({
  selector: "app-login",
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

  constructor(
    private fb: FormBuilder,
    private socketService: SocketService,
    private appService: AppService,
    private _route: Router // private cookieService: CookieService
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

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  value;
  onSubmit() {
    console.log(this.form.value);
    this.appService.logIn(this.form.value).subscribe(data => {
      console.log(data);
      localStorage.setItem("userId", data.userId);
      this._route.navigate(["profile"]);
    });
    if (this.form.valid) {
      this.socketService.logIn(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
