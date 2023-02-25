import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungarianUpdateComponent } from './hungarian-update.component';

describe('HungarianUpdateComponent', () => {
  let component: HungarianUpdateComponent;
  let fixture: ComponentFixture<HungarianUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HungarianUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HungarianUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
