import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciobComponent } from './serviciob.component';

describe('ServiciobComponent', () => {
  let component: ServiciobComponent;
  let fixture: ComponentFixture<ServiciobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
