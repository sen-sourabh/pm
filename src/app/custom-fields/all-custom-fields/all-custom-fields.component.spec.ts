import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomFieldsComponent } from './all-custom-fields.component';

describe('AllCustomFieldsComponent', () => {
  let component: AllCustomFieldsComponent;
  let fixture: ComponentFixture<AllCustomFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCustomFieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllCustomFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
