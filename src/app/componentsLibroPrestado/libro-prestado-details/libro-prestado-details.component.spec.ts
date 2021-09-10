import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroPrestadoDetailsComponent } from './libro-prestado-details.component';

describe('LibroPrestadoDetailsComponent', () => {
  let component: LibroPrestadoDetailsComponent;
  let fixture: ComponentFixture<LibroPrestadoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroPrestadoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroPrestadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
