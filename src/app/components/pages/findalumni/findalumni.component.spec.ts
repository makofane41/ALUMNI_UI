import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindalumniComponent } from './findalumni.component';

describe('FindalumniComponent', () => {
  let component: FindalumniComponent;
  let fixture: ComponentFixture<FindalumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindalumniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindalumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
