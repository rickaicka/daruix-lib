import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';
import {MatLegacyButton as MatButton} from "@angular/material/legacy-button";
@Component({
  selector: 'drx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class DrxButtonComponent implements AfterViewInit  {

  constructor() {
  }

  clickBtn: Subject<any> = new Subject;

  @Input() labelBtn?: string;
  @Input() typeBtn?: string;
  @Input() icon?: string;
  @ViewChild('btnComponent', {static:true}) btnComponent!: MatButton;

  ngAfterViewInit(): void {
    this.btnComponent?._elementRef.nativeElement?.classList.add(`${(this.typeBtn ? this.typeBtn : 'red')}-primary-btn`)
  }
}
