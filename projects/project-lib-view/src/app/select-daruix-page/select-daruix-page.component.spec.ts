import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDaruixPageComponent } from './select-daruix-page.component';

describe('SelectDaruixPageComponent', () => {
  let component: SelectDaruixPageComponent;
  let fixture: ComponentFixture<SelectDaruixPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDaruixPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDaruixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
