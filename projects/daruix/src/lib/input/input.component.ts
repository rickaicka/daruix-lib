import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'drx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class DrxInputComponent implements AfterViewInit {

  // pode alterar a label, colocar um placeholder, alterar a cor, se esta desabilitado

  clickInput: Subject<any> = new Subject;
  
  @Input() labelInput?:string;
  @Input() placeholderInput?:string;
  @Input() colorInput?:string;
  @Input() disabledInput?:boolean = false;

  @ViewChild('inputComponent', {static:true}) inputComponent!: ElementRef;
  
  constructor() { }

  ngAfterViewInit(): void {
    this.inputComponent?.nativeElement?.classList.add(`${(this.colorInput ? this.colorInput : 'red')}-primary-input`)
  }

}
