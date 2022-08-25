import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaruixComponent } from './daruix.component';

describe('DaruixComponent', () => {
  let component: DaruixComponent;
  let fixture: ComponentFixture<DaruixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaruixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaruixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
