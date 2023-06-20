import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioDetailsComponent } from './estudio-details.component';

describe('EstudioDetailsComponent', () => {
  let component: EstudioDetailsComponent;
  let fixture: ComponentFixture<EstudioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
