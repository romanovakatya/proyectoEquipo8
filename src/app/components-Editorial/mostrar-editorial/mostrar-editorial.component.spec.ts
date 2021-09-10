import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEditorialComponent } from './mostrar-editorial.component';

describe('MostrarEditorialComponent', () => {
  let component: MostrarEditorialComponent;
  let fixture: ComponentFixture<MostrarEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
