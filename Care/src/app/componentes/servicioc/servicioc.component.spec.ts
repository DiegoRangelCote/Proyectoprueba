import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciocComponent } from './servicioc.component';

describe('ServiciocComponent', () => {
  let component: ServiciocComponent;
  let fixture: ComponentFixture<ServiciocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
