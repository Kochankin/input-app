import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { numberRegex } from "../numberRegex";
import * as regex from "../passwordRegExp";
import { errMessages } from "../errMessages";
import { range, passwordMatch, passwordMismatch } from "../inputTypes";

@Component({
  selector: "input-component",
  templateUrl: "./input-component.component.html",
  styleUrls: ["./input-component.component.css"]
})
export class InputComponentComponent implements OnInit {
  @ViewChild("input") input: ElementRef;
  @ViewChild("inputSecond") inputSecond: ElementRef;

  @Input() inputType: string;
  @Input() maxLength: number;
  @Input() isRequired: boolean;
  @Input() min: number;
  @Input() max: number;

  public error: string;
  public isDouble: boolean;
  public currValues: string[] = [];
  public className: string;

  ngOnInit() {
    this.setClass();
    this.checkIsDoubleInput();
  }

  ngAfterViewInit() {
    const maxL = this.maxLength || this.inputType.includes("number") ? 5 : 500;
    this.input.nativeElement.maxLength = maxL;
    if (this.inputSecond) {
      this.inputSecond.nativeElement.maxLength = maxL;
    }
  }

  checkIsDoubleInput() {
    this.isDouble = [passwordMatch, passwordMismatch, range].includes(
      this.inputType
    );
  }

  setClass() {
    const joined = this.inputType
      .trim()
      .split(" ")
      .join("-");
    this.className = `input-${joined}`;
  }

  validateNumber(e) {
    const { value } = e.target;
    if (value && !numberRegex.test(value)) {
      this.error = errMessages.positiveNum;
    } else {
      this.error = "";
      this.inputType === range && this.validateRange();
    }
  }

  validatePassword(e) {
    const { value } = e.target;
    if (value && !regex.passwordRegex.test(value)) {
      if (value.length < 8) {
        this.error = errMessages.passLength;
      } else if (!regex.upperLetterRegex.test(value)) {
        this.error = errMessages.oneUpper;
      } else if (!regex.lowerLetterRegex.test(value)) {
        this.error = errMessages.oneLower;
      } else if (!regex.digitRegex.test(value)) {
        this.error = errMessages.oneNum;
      } else if (!regex.specialSymRegex.test(value)) {
        this.error = errMessages.oneSpecial;
      }
    } else {
      this.error = "";
      this.inputType === passwordMatch && this.validateMatch(e);
      this.inputType === passwordMismatch && this.validateMismatch(e);
    }
  }

  validateMatch(e) {
    const firstVal = this.input.nativeElement.value;
    const secondVal = this.inputSecond.nativeElement.value;
    if (e.target === this.inputSecond.nativeElement && firstVal !== secondVal) {
      this.error = errMessages.passDiffer;
    } else {
      this.error = "";
    }
  }

  validateMismatch(e) {
    const firstVal = this.input.nativeElement.value;
    const secondVal = this.inputSecond.nativeElement.value;
    if (firstVal && secondVal && e.target === this.inputSecond.nativeElement && firstVal === secondVal) {
      this.error = errMessages.passCoincide;
    } else {
      this.error = "";
    }
  }

  validateRange() {
    const min = this.input.nativeElement.value;
    const max = this.inputSecond.nativeElement.value;
    if (min && max && +min > +max) {
      this.error = errMessages.rangeErr;
    } else {
      this.error = "";
    }
  }

  onKeyUp(e) {
    this.inputType.includes("password") && this.validatePassword(e);
    this.inputType.includes("number") && this.validateNumber(e);
  }
}
