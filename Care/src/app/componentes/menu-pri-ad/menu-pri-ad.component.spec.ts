import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPriAdComponent } from './menu-pri-ad.component';

describe('MenuPriAdComponent', () => {
  let component: MenuPriAdComponent;
  let fixture: ComponentFixture<MenuPriAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPriAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPriAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
