import { Component, OnInit } from "@angular/core";
import { SocketService } from "../user/socket.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Message } from "./message";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "./message.service";
import { AppService } from "../app.service";
import { User } from "../user/user";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-messages",
  template: `
  <app-alerts></app-alerts>
  `,
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  public isPopupVisible = false;
  public isComposePopupVisible = false;
  public composeMessage = {};
  public activeTab = "inbox";
  public sentMessages = [];
  showFile = false;
  currentProfile: User = new User();
  public authToken: any;
  public userInfo: any;
  public userId: any;
  public disconnectedSocket: boolean;

  showComposePopup = function(compose) {
    this.composeMessage = {};
    this.isComposePopupVisible = true; // Not sure if necessary anymore
    this.modalService.open(compose, { centered: true });
  };

  closeComposePopup = function() {
    this.isComposePopupVisible = false;
  };

  showPopup = function(message, content) {
    console.log("showing popup");
    this.isPopupVisible = true; // Not sure if necessary anymore
    this.selectedMessage = message;
    this.modalService.open(content, { centered: true });
  };

  closePopup = function() {
    console.log("closing popup");
    this.isPopupVisible = false; // not sure if necessary anymore
  };

  sendMessage = function() {
    console.log(this.composeMessage);
    this.messageService.addMessage(this.composeMessage).subscribe(data => {
      console.log(data);
      localStorage.setItem("id", data.id);
      this.composeMessage.toId = this.currentProfile.userId;
      this.isComposePopupVisible = false;
      this.composeMessage.from = this.author;
      this.composeMessage.to = this.toUser;
      this.composeMessage.date = new Date();
    });
    if (this.composeMessage.sent) {
      this.sentMessages.push(this.composeMessage);
      this.sentMessages = true;
      this.toastr.error("Sign In Not Successful");
    } else {
      this.sentMessages = false || null;
      this.toastr.error("Sign In Not Successful");
    }
  };

  messages = [
    {
      from: "Jason",
      to: "me",
      subject: "Hello World!",
      date: "Sept 1",
      body: "I love Angular! I wonder if it loves me back?"
    },
    {
      from: "Angela",
      to: "me",
      subject: "Yeah, I don't know about Angular.",
      date: "Sept 3",
      body:
        "Angular and I are just friends! Hmm, but I don't mind getting to know it."
    },
    {
      from: "Mio",
      to: "me",
      subject: "Wassup? ",
      date: "Aug 28",
      body: "What about Java? Now that's for me!"
    }
  ];
  constructor(
    private messageService: MessageService,
    private appService: AppService,
    private socketService: SocketService,
    private cookieService: CookieService,
    private modalService: NgbModal,
    private _route: Router
  ) {}

  profile: User;
  // // profilePic: string;

  getProfile() {
    this.socketService.getProfile(this.userId).subscribe(p => {
      this.profile = p;
      this.currentProfile = p;
      // this.profilePic = p.image;
    });
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.getProfile();
  }
}
