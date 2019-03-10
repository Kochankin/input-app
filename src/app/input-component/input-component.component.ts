import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-component",
  templateUrl: "./input-component.component.html",
  styleUrls: ["./input-component.component.css"]
})
export class InputComponentComponent implements OnInit {
  @Input() type: string;
  @Input() minDate: string;
  @Input() maxDate: string;
  @Input() minValue: string;
  @Input() maxValue: string;
  @Input() minNumber: string;
  @Input() maxNumber: string;
  @Input() maxLength: string;
  constructor() {}

  ngOnInit() {}
}
