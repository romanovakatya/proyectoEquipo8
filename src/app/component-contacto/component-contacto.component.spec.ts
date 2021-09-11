import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContactoComponent } from './component-contacto.component';

describe('ComponentContactoComponent', () => {
  let component: ComponentContactoComponent;
  let fixture: ComponentFixture<ComponentContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
