import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() maxLength: string;
  @ViewChild("input") input: any;
  constructor() { }

  ngOnInit() {
    this.input.nativeElement.maxLength = this.maxLength;
  }

}
