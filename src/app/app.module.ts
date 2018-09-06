import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from ".//routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { JobsComponent } from "./jobs/jobs.component";
import { FooterComponent } from "./nav/footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JobsListComponent } from "./jobslist/jobslist.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { MessagesComponent } from "./messages/messages.component";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular5-social-login";
import { AppService } from "./app.service";
import { CookieService } from "ngx-cookie-service";
import { SignupComponent } from "./user/signup/signup.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./user/login/login.component";
import { HeaderComponent } from "./nav/header/header.component";
import { SocialSigninComponent } from "./user/social-signin/social-signin.component";
import { AppMaterialModule } from "./user/app-material/app-material.module";
import { LoginLayoutComponent } from "./user/layouts/login-layout/login-layout.component";
import { ProfileLayoutComponent } from "./user/layouts/profile-layout/profile-layout.component";
import { LoginSigninHeaderComponent } from "./nav/login-signin-header/login-signin-header.component";
import { LoginSigninFooterComponent } from "./nav/login-signin-footer/login-signin-footer.component";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    // {
    //   id: FacebookLoginProvider.PROVIDER_ID,
    //   provider: new FacebookLoginProvider("939102882940335")
    // },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "727042451255-ck50cvd4bbjaum6187dksk6nacq3hj1r.apps.googleusercontent.com"
      )
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    JobsComponent,
    HeaderComponent,
    FooterComponent,
    JobsListComponent,
    SocialSigninComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MessagesComponent,
    ProfileLayoutComponent,
    LoginLayoutComponent,
    LoginSigninHeaderComponent,
    LoginSigninFooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    Ng2SearchPipeModule,
    AppMaterialModule
  ],

  providers: [
    AppService,
    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
