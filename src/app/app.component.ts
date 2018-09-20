import { Component } from "@angular/core";
import { AvatarModule } from "ng2-avatar";
@Component({
  selector: "my-app",
  template: `
  <router-outlet></router-outlet>
`,
  styles: []
})
export class AppComponent {
  title = "app";
}
