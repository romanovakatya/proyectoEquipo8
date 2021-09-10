import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLibroDetailsComponent } from './buscar-libro-details.component';

describe('BuscarLibroDetailsComponent', () => {
  let component: BuscarLibroDetailsComponent;
  let fixture: ComponentFixture<BuscarLibroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarLibroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLibroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
