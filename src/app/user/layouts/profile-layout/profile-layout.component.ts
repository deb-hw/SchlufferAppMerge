import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile-layout",
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
`,
  styles: []
})
export class ProfileLayoutComponent {}
