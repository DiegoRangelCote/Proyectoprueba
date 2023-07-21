import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudashComponent } from './menudash.component';

describe('MenudashComponent', () => {
  let component: MenudashComponent;
  let fixture: ComponentFixture<MenudashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenudashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
