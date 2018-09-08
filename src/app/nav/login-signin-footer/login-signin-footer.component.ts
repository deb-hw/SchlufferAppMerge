import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-signin-footer",
  templateUrl: "./login-signin-footer.component.html",
  styleUrls: ["./login-signin-footer.component.css"]
})
export class LoginSigninFooterComponent implements OnInit {
  today: number = Date.now();

  showComposePopup = function(compose) {
    this.composeMessage = {};
    this.isComposePopupVisible = true; // Not sure if necessary anymore
    this.modalService.open(compose, { centered: true });
  };

  closeComposePopup = function() {
    this.isComposePopupVisible = false;
  };
  constructor() {}

  ngOnInit() {}
}
