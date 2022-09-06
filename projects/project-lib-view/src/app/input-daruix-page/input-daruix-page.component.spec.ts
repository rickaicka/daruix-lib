import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDaruixPageComponent } from './input-daruix-page.component';

describe('InputDaruixPageComponent', () => {
  let component: InputDaruixPageComponent;
  let fixture: ComponentFixture<InputDaruixPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDaruixPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDaruixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
