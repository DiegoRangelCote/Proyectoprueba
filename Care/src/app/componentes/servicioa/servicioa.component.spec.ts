import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioaComponent } from './servicioa.component';

describe('ServicioaComponent', () => {
  let component: ServicioaComponent;
  let fixture: ComponentFixture<ServicioaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
