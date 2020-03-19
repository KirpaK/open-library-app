import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "open-library";

  ngOnInit() {
    // this.transferVideo();
  }

  private async transferVideo() {
    const video = document.querySelector("video");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: true
    });
    video.srcObject = stream;
    await new Promise((resolve, reject) => {
      video.onloadedmetadata = _ => {
        console.log(stream);
        resolve();
      };
    });
  }
}
