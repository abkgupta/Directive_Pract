import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NstyleComponent } from './nstyle.component';

describe('NstyleComponent', () => {
  let component: NstyleComponent;
  let fixture: ComponentFixture<NstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NstyleComponent]
    });
    fixture = TestBed.createComponent(NstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
