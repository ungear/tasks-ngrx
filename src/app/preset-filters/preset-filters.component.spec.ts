import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetFiltersComponent } from './preset-filters.component';

describe('PresetFiltersComponent', () => {
  let component: PresetFiltersComponent;
  let fixture: ComponentFixture<PresetFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
