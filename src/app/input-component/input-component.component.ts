import { Component, OnInit, Input, ViewChild } from "@angular/core";
import {
  text,
  number,
  range,
  password,
  passwordMatch,
  passwordMismatch
} from "../inputTypes";
@Component({
  selector: "input-component",
  templateUrl: "./input-component.component.html",
  styleUrls: ["./input-component.component.css"]
})
export class InputComponentComponent implements OnInit {
  @ViewChild("input") input: any;
  @ViewChild("inputFirst") inputFirst: any;
  @ViewChild("inputSecond") inputSecond: any;
  @Input() inputType: string;
  @Input() maxLength: number;
  @Input() isRequired: boolean;
  @Input() min: number;
  @Input() max: number;

  public error: string;
  public placeholder: string;
  public placeholderFirst: string;
  public placeholderSecond: string;
  public className: string;
  public inputValue: string = "";
  public inputFirstValue: string = "";
  public inputSecondValue: string = "";
  public inputStructure: string;
  constructor() {}

  ngOnInit() {
    this.inputStructure = [passwordMatch, passwordMismatch, range].includes(
      this.inputType
    )
      ? "double"
      : "single";

    this.maxLength = this.maxLength
      ? this.maxLength
      : this.inputType.includes("number")
      ? 5
      : 500;

    this.isRequired = this.isRequired ? this.isRequired : false;

    switch (this.inputType) {
      case text:
        this.placeholder = "Enter some text";
        break;

      case number:
        this.placeholder = "Enter some number";
        break;

      case range:
        this.placeholderFirst = "Min";
        this.placeholderSecond = "Max";
        break;

      case password:
        this.placeholder = "Enter password";
        break;

      case passwordMatch:
        this.placeholderFirst = "Enter password";
        this.placeholderSecond = "Confirm the password";
        break;

      case passwordMismatch:
        this.placeholderFirst = "Enter password";
        this.placeholderSecond = "Enter different password";
        break;
    }

    // if (this.input) {
    //   this.input.nativeElement.maxLength = this.maxLength;
    // }
    // if (this.inputFirst) {
    // this.inputFirst.nativeElement.maxLength = this.maxLength;
    // this.inputSecond.nativeElement.maxLength = this.maxLength;
    // }
  }

  validateNumber(e) {
    ![
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "Backspace"
    ].includes(e.key) && e.preventDefault();
  }

  onKeyDown(e) {
    this.inputType.includes("number") && this.validateNumber(e);
    // this.inputType === "password" && this.validatePassword(e);
  }

  onKeyUp(e) {
    if (this.inputType.includes("number")) {
      if (
        (this.inputValue && Number(this.inputValue) === 0) ||
        (this.inputFirstValue && Number(this.inputFirstValue) === 0) ||
        (this.inputSecondValue && Number(this.inputSecondValue) === 0)
      ) {
        this.error = "Number must be positive";
      }else {
        this.error = '';
      }
    }
  }
}
