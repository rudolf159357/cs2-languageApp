import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanUpdateComponent } from './german-update.component';

describe('GermanUpdateComponent', () => {
  let component: GermanUpdateComponent;
  let fixture: ComponentFixture<GermanUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
