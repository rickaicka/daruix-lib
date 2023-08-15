import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDaruixPageComponent } from './btn-daruix-page.component';

describe('BtnDaruixPageComponent', () => {
  let component: BtnDaruixPageComponent;
  let fixture: ComponentFixture<BtnDaruixPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDaruixPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDaruixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
