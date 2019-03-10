import { Component, OnInit, ViewChild, Input } from "@angular/core";

@Component({
  selector: "app-input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.css"]
})
export class InputNumberComponent implements OnInit {
  @Input() minNumber: string;
  @Input() maxNumber: string;
  @ViewChild("input") input: any;
  public num: string;
  constructor() {}

  ngOnInit() {
    this.input.nativeElement.min = this.minNumber;
    this.input.nativeElement.max = this.maxNumber;
  }
}
