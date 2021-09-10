import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEditorialComponent } from './principal-editorial.component';

describe('PrincipalEditorialComponent', () => {
  let component: PrincipalEditorialComponent;
  let fixture: ComponentFixture<PrincipalEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
