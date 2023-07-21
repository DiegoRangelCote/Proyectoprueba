import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciodComponent } from './serviciod.component';

describe('ServiciodComponent', () => {
  let component: ServiciodComponent;
  let fixture: ComponentFixture<ServiciodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
