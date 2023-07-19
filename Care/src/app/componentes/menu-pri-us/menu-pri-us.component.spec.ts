import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPriUsComponent } from './menu-pri-us.component';

describe('MenuPriUsComponent', () => {
  let component: MenuPriUsComponent;
  let fixture: ComponentFixture<MenuPriUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPriUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPriUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
