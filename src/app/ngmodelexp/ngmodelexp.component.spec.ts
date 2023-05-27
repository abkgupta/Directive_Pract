import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelexpComponent } from './ngmodelexp.component';

describe('NgmodelexpComponent', () => {
  let component: NgmodelexpComponent;
  let fixture: ComponentFixture<NgmodelexpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgmodelexpComponent]
    });
    fixture = TestBed.createComponent(NgmodelexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
