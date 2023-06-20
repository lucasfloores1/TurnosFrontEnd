import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraSocialDetailsComponent } from './obra-social-details.component';

describe('ObraSocialDetailsComponent', () => {
  let component: ObraSocialDetailsComponent;
  let fixture: ComponentFixture<ObraSocialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraSocialDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraSocialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
