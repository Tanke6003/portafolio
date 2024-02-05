import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailContactComponent } from './email-contact.component';

describe('EmailContactComponent', () => {
  let component: EmailContactComponent;
  let fixture: ComponentFixture<EmailContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
