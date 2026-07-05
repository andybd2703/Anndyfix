import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFlotante } from './whatsapp-flotante';

describe('WhatsappFlotante', () => {
  let component: WhatsappFlotante;
  let fixture: ComponentFixture<WhatsappFlotante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappFlotante],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappFlotante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
