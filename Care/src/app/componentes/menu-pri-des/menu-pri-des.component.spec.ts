import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPriDesComponent } from './menu-pri-des.component';

describe('MenuPriDesComponent', () => {
  let component: MenuPriDesComponent;
  let fixture: ComponentFixture<MenuPriDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPriDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPriDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
