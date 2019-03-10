import { Component, OnInit, ViewChild, Input } from "@angular/core";

@Component({
  selector: "app-input-range",
  templateUrl: "./input-range.component.html",
  styleUrls: ["./input-range.component.css"]
})
export class InputRangeComponent implements OnInit {
  @Input() minValue: string;
  @Input() maxValue: string;
  @ViewChild("input") input: any;
  public inputValue: string;
  constructor() {}

  ngOnInit() {
    this.inputValue = this.minValue;
    this.input.nativeElement.min = this.minValue;
    this.input.nativeElement.max = this.maxValue;
  }
}
