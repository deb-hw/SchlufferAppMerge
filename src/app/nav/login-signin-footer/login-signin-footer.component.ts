import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-signin-footer",
  templateUrl: "./login-signin-footer.component.html",
  styleUrls: ["./login-signin-footer.component.css"]
})
export class LoginSigninFooterComponent implements OnInit {
  today: number = Date.now();

  constructor() {}

  ngOnInit() {}
}
