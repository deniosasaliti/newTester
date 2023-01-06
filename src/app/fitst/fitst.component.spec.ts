import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitstComponent } from './fitst.component';

describe('FitstComponent', () => {
  let component: FitstComponent;
  let fixture: ComponentFixture<FitstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
