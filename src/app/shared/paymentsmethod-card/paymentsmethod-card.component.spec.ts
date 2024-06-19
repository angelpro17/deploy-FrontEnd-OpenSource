import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsmethodCardComponent } from './paymentsmethod-card.component';

describe('PaymentsmethodCardComponent', () => {
  let component: PaymentsmethodCardComponent;
  let fixture: ComponentFixture<PaymentsmethodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsmethodCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsmethodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
