import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLibroListComponent } from './buscar-libro-list.component';

describe('BuscarLibroComponent', () => {
  let component: BuscarLibroListComponent;
  let fixture: ComponentFixture<BuscarLibroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarLibroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLibroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
