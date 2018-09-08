import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { JobsComponent } from "./jobs/jobs.component";
import { JobsListComponent } from "./jobslist/jobslist.component";
import { MessagesComponent } from "./messages/messages.component";
import { SignupComponent } from "./user/signup/signup.component";
import { LoginComponent } from "./user/login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { AuthorizationGuard } from "./user/authorization/authorization.guard";
import { LoginLayoutComponent } from "./user/layouts/login-layout/login-layout.component";
import { ProfileLayoutComponent } from "./user/layouts/profile-layout/profile-layout.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileLayoutComponent,
    canActivate: [AuthorizationGuard],
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "edit", component: EditComponent },
      { path: "jobs", component: JobsComponent },
      { path: "jobslist", component: JobsListComponent },
      { path: "messages", component: MessagesComponent }
    ]
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      { path: "contact", component: ContactComponent },
      { path: "about", component: AboutComponent }
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild([{ path: "signup", component: SignupComponent }])
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
