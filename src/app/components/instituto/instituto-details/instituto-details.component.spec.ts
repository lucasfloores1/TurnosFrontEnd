import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDetailsComponent } from './instituto-details.component';

describe('InstitutoDetailsComponent', () => {
  let component: InstitutoDetailsComponent;
  let fixture: ComponentFixture<InstitutoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
