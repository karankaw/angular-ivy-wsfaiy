import {
  Component,
  VERSION,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
   this.firstName = "Vipan";
  }
  ngOnInit(): void {
    this.firstName = "Karan";
  }

  firstName: string;

  name = "Angular " + VERSION.major;
}
