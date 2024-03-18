import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCountriesComponent } from './feature-countries.component';

describe('FeatureCountriesComponent', () => {
  let component: FeatureCountriesComponent;
  let fixture: ComponentFixture<FeatureCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCountriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
