import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-daruix-page',
  templateUrl: './checkbox-daruix-page.component.html',
  styleUrls: ['./checkbox-daruix-page.component.scss']
})
export class CheckboxDaruixPageComponent implements OnInit {

  disabledCheckbox:boolean = false
  indeterminateCheckbox:boolean = false
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
