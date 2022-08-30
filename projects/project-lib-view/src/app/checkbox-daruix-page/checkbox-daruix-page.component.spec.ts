import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDaruixPageComponent } from './checkbox-daruix-page.component';

describe('CheckboxDaruixPageComponent', () => {
  let component: CheckboxDaruixPageComponent;
  let fixture: ComponentFixture<CheckboxDaruixPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxDaruixPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDaruixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
