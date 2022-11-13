import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDeseadosComponent } from './libros-deseados.component';

describe('LibrosDeseadosComponent', () => {
  let component: LibrosDeseadosComponent;
  let fixture: ComponentFixture<LibrosDeseadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosDeseadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosDeseadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
