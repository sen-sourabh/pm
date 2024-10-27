import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaultComponent } from './add-vault.component';

describe('AddVaultComponent', () => {
  let component: AddVaultComponent;
  let fixture: ComponentFixture<AddVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
