import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import { Subject } from 'rxjs';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'lib-btn-daruix',
  templateUrl: './btn-daruix.component.html',
  styleUrls: ['./btn-daruix.component.scss']
})
export class BtnDaruixComponent implements AfterViewInit  {

  constructor() {
  }

  clickBtn: Subject<any> = new Subject;

  @Input() labelBtn?: string;
  @Input() typeBtn?: string;
  @Input() icon?: string;
  @ViewChild('btnComponent', {static:true}) btnComponent!: MatButton;

  ngAfterViewInit(): void {
    this.btnComponent?._elementRef.nativeElement?.classList.add(`${this.typeBtn}-primary`)
  }
}
