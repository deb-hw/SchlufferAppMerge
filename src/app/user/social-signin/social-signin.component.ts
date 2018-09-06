import { Component } from "@angular/core";
import {
  AuthService,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angular5-social-login";

@Component({
  selector: "app-social-signin",
  templateUrl: "./social-signin.component.html",
  styleUrls: ["./social-signin.component.css"]
})
export class SocialSigninComponent {
  constructor(private socialAuthservice: AuthService) {}
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthservice.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + "sign in data : ", userData);
    });
  }
}
