import { Component, OnInit } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrService } from "ngx-toastr";
import { AppService } from "../../app.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SocketService } from "../socket.service";

@Component({
  selector: "app-signup",
  template: `
  <app-alerts></app-alerts>
  `,
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  hide = true;
  public username: string;
  public email: string;
  public password: string;
  user = {};
  value;

  constructor(
    private fb: FormBuilder,
    private socketService: SocketService,
    private toastr: ToastrService,
    private appService: AppService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
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
    this.appService.signUpFunction(this.form.value).subscribe(data => {
      console.log(data);
      localStorage.setItem("userId", data.userId);
      this._route.navigate(["login"]);
      this.toastr.success("Registration Successful");
    });
    if (this.form.valid) {
      this.appService.signUpFunction(this.form.value);
      this.formSubmitAttempt = true;
    } else {
      this.formSubmitAttempt = false || null;
      this.toastr.error("Sign Up Not Successful");
    }
  }
}
