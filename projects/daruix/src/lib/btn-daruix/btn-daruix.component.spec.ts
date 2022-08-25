import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDaruixComponent } from './btn-daruix.component';

describe('BtnDaruixComponent', () => {
  let component: BtnDaruixComponent;
  let fixture: ComponentFixture<BtnDaruixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDaruixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDaruixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
