import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "input-component",
  templateUrl: "./input-component.component.html",
  styleUrls: ["./input-component.component.css"]
})
export class InputComponentComponent implements OnInit {
  @ViewChild("input") input: any;
  @Input() inputType: string;
  public placeholder: string;
  public className: string;
  public inputValue: string = "";
  constructor() {}

  ngOnInit() {
    switch (this.inputType) {
      case "text":
        this.placeholder = "some text";
        this.className = "input-text";
        this.input.nativeElement.maxLength = 10;
        break;

      case "number":
        this.placeholder = "0";
        this.className = "input-number";
        break;

      case "password":
        this.placeholder = "password";
        this.className = "input-password";
        break;
    }
  }

  validateNumber(e) {
    !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) &&
      e.preventDefault();
  }

  validatePassword(e) {
    this.inputValue.length === 7 && e.key !== "Backspace" && e.preventDefault();
  }

  onChange(e) {
    this.inputType === "number" && this.validateNumber(e);
    this.inputType === "password" && this.validatePassword(e);
  }
}
