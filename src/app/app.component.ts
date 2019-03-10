import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public numberType: string = "number";
  public textType: string = "text";
  public rangeType: string = "range";
  public dateType: string = "date";
}
