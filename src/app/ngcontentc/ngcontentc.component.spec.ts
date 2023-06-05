import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentcComponent } from './ngcontentc.component';

describe('NgcontentcComponent', () => {
  let component: NgcontentcComponent;
  let fixture: ComponentFixture<NgcontentcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcontentcComponent]
    });
    fixture = TestBed.createComponent(NgcontentcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
