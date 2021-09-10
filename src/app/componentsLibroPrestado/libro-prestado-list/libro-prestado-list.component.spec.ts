import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroPrestadoListComponent } from './libro-prestado-list.component';

describe('LibroPrestadoListComponent', () => {
  let component: LibroPrestadoListComponent;
  let fixture: ComponentFixture<LibroPrestadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroPrestadoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroPrestadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
