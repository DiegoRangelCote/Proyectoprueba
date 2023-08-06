import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCorreoElectronicoComponent } from './actualizar-correo-electronico.component';

describe('ActualizarCorreoElectronicoComponent', () => {
  let component: ActualizarCorreoElectronicoComponent;
  let fixture: ComponentFixture<ActualizarCorreoElectronicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCorreoElectronicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCorreoElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
