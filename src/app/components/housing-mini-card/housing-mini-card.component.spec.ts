import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingMiniCardComponent } from './housing-mini-card.component';

describe('HousingMiniCardComponent', () => {
  let component: HousingMiniCardComponent;
  let fixture: ComponentFixture<HousingMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingMiniCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousingMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
