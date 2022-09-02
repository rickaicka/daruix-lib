import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { Subject } from 'rxjs';

@Component({
  selector: 'drx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {


  // a pessoa pode determinar a cor do checkbox (tipo), se ele é indeterminado, se ele está desabilitado e sua label.

  clickCheckbox: Subject<any> = new Subject;

  @Input() labelCheckbox?: string;
  @Input() typeCheckbox?: string;
  @Input() disabledCheckbox?: boolean;
  @Input() indeterminateCheckbox?: boolean;
  @ViewChild('checkboxComponent', {static:true}) checkboxComponent!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isDisabled()
  }

  isDisabled(){
    if(this.disabledCheckbox){
      this.checkboxComponent?.nativeElement.classList.add(`disabled-primary-checkbox`)
    }else{
      this.checkboxComponent?.nativeElement?.classList.add(`${(this.typeCheckbox ? this.typeCheckbox : 'red')}-primary-checkbox`)
    }
  }
}
