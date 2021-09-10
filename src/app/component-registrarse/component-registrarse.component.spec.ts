import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRegistrarseComponent } from './component-registrarse.component';

describe('ComponentRegistrarseComponent', () => {
  let component: ComponentRegistrarseComponent;
  let fixture: ComponentFixture<ComponentRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRegistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
