import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavPageComponent } from './header-nav-page.component';

describe('HeaderNavPageComponent', () => {
  let component: HeaderNavPageComponent;
  let fixture: ComponentFixture<HeaderNavPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavPageComponent]
    });
    fixture = TestBed.createComponent(HeaderNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
