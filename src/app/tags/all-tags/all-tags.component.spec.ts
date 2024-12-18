import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTagsComponent } from './all-tags.component';

describe('AllTagsComponent', () => {
  let component: AllTagsComponent;
  let fixture: ComponentFixture<AllTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTagsComponent],
    });
    fixture = TestBed.createComponent(AllTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
