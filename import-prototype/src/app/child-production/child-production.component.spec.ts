import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductionComponent } from './child-production.component';

describe('ChildProductionComponent', () => {
  let component: ChildProductionComponent;
  let fixture: ComponentFixture<ChildProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildProductionComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
