import { Directive, Input, ElementRef, OnInit } from "@angular/core";
import { placeholders } from "./placeholders";
import {
  text,
  number,
  range,
  password,
  passwordMatch,
  passwordMismatch
} from "./inputTypes";

@Directive({
  selector: "[appPlaceholder]"
})
export class PlaceholderDirective implements OnInit {
  @Input("appPlaceholder") inputType: string;
  @Input() isSecond: boolean;
  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.getPlaceholder();
  }

  getPlaceholder() {
    switch (this.inputType) {
      case text:
        this.el.nativeElement.placeholder = placeholders.text;
        break;

      case number:
        this.el.nativeElement.placeholder = placeholders.number;
        break;

      case range:
        this.el.nativeElement.placeholder = this.isSecond
          ? placeholders.max
          : placeholders.min;
        break;

      case password:
        this.el.nativeElement.placeholder = placeholders.password;
        break;

      case passwordMatch:
        this.el.nativeElement.placeholder = this.isSecond
          ? placeholders.passwordMatch
          : placeholders.password;
        break;

      case passwordMismatch:
        this.el.nativeElement.placeholder = this.isSecond
        ? placeholders.passwordMismatch
        : placeholders.password;
        break;
    }
  }
}
