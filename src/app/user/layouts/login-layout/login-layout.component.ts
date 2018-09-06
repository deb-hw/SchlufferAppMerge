import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-layout",
  template: `
  <app-login-signin-header></app-login-signin-header>
  <router-outlet></router-outlet>
  <app-login-signin-footer></app-login-signin-footer>
`,
  styles: []
})
export class LoginLayoutComponent {}
