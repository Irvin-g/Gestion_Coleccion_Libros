import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColeccionesComponent } from './lista-colecciones.component';

describe('ListaColeccionesComponent', () => {
  let component: ListaColeccionesComponent;
  let fixture: ComponentFixture<ListaColeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColeccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
