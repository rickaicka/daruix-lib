import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-checkbox-daruix',
  templateUrl: './checkbox-daruix.component.html',
  styleUrls: ['./checkbox-daruix.component.scss']
})
export class CheckboxDaruixComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() lbl?: string;
  ngOnInit(): void {
    console.log(this.lbl)
  }
  ngAfterViewInit() {
    console.log(this.lbl)
  }
}
