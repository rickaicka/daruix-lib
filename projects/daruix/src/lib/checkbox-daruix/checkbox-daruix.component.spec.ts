import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDaruixComponent } from './checkbox-daruix.component';

describe('CheckboxDaruixComponent', () => {
  let component: CheckboxDaruixComponent;
  let fixture: ComponentFixture<CheckboxDaruixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxDaruixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDaruixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
