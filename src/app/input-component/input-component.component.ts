import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import {
  text,
  number,
  range,
  password,
  passwordMatch,
  passwordMismatch
} from "../inputTypes";
import { numberRegex } from "../numberRegex";
import {
  upperLetterRegex,
  lowerLetterRegex,
  digitRegex,
  specialSymRegex,
  passwordRegex
} from "../passwordRegExp";

@Component({
  selector: "input-component",
  templateUrl: "./input-component.component.html",
  styleUrls: ["./input-component.component.css"]
})
export class InputComponentComponent implements OnInit {
  @ViewChild("input") input: ElementRef;
  @ViewChild("inputFirst") inputFirst: ElementRef;
  @ViewChild("inputSecond") inputSecond: ElementRef;
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
    this.getPlaceholder();
    this.setInputStructure();
    this.setMaxLength();
    this.setClass();
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.maxLength = this.maxLength;
    } else {
      this.inputFirst.nativeElement.maxLength = this.maxLength;
      this.inputSecond.nativeElement.maxLength = this.maxLength;
    }
  }

  setInputStructure() {
    this.inputStructure = [passwordMatch, passwordMismatch, range].includes(
      this.inputType
    )
      ? "double"
      : "single";
  }

  setMaxLength() {
    this.maxLength = this.maxLength
      ? this.maxLength
      : this.inputType.includes("number")
      ? 5
      : 500;
  }

  setClass(){
    const joined = this.inputType.trim().split(' ').join('-');
    this.className = `input-${joined}`;
  }

  getPlaceholder() {
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
  }

  validateNumber(e) {
    const { value } = e.target;
    if (value && !numberRegex.test(value)) {
      this.error = "Only positive numbers are allowed";
    } else {
      this.error = "";
    }
  }

  validatePassword(e) {
    const { value } = e.target;
    if (value && !passwordRegex.test(value)) {
      if (value.length < 8) {
        this.error = "Password should contain min 8 characters";
      } else if (!upperLetterRegex.test(value)) {
        this.error = "Password should contain at least 1 uppercase letter";
      } else if (!lowerLetterRegex.test(value)) {
        this.error = "Password should contain at least 1 lowercase letter";
      } else if (!digitRegex.test(value)) {
        this.error = "Password should contain at least 1 number";
      } else if (!specialSymRegex.test(value)) {
        this.error = "Password should contain at least 1 special character";
      }
    } else {
      this.error = "";
    }
  }

  validateMatch(e) {
    const firstVal = this.inputFirst.nativeElement.value;
    const secondVal = this.inputSecond.nativeElement.value;
    if (e.target === this.inputSecond.nativeElement && firstVal !== secondVal) {
      this.error = "Entered passwords don`t match";
    } else {
      this.error = "";
    }
  }

  validateMismatch(e) {
    const firstVal = this.inputFirst.nativeElement.value;
    const secondVal = this.inputSecond.nativeElement.value;
    if (e.target === this.inputSecond.nativeElement && firstVal === secondVal) {
      this.error = "Entered passwords must differ";
    } else {
      this.error = "";
    }
  }

  validateRange(e) {
    const min = this.inputFirst.nativeElement.value;
    const max = this.inputSecond.nativeElement.value;
    if (min && max && +min > +max) {
      this.error = "Max must be larger than min";
    } else {
      this.error = "";
    }
  }

  onKeyUp(e) {
    this.inputType.includes("password") && this.validatePassword(e);
    // this.inputType === passwordMatch && this.validateMatch(e);
    // this.inputType === passwordMismatch && this.validateMismatch(e);
    this.inputType.includes("number") && this.validateNumber(e);
    // this.inputType === range && this.validateRange(e);
  }

}
