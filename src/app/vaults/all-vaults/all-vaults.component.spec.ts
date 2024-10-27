import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVaultsComponent } from './all-vaults.component';

describe('AllVaultsComponent', () => {
  let component: AllVaultsComponent;
  let fixture: ComponentFixture<AllVaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllVaultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllVaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
