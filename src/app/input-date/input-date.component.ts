import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {
  @Input() minDate: string; 
  @Input() maxDate: string;
  @ViewChild("input") input: any;
  constructor() { }

  ngOnInit() {
    this.input.nativeElement.min = this.minDate;
    this.input.nativeElement.max = this.maxDate;
  }

}
