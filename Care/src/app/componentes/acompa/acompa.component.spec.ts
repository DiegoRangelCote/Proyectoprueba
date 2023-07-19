import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompaComponent } from './acompa.component';

describe('AcompaComponent', () => {
  let component: AcompaComponent;
  let fixture: ComponentFixture<AcompaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
