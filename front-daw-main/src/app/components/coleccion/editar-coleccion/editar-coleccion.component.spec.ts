import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarColeccionComponent } from './editar-coleccion.component';

describe('EditarColeccionComponent', () => {
  let component: EditarColeccionComponent;
  let fixture: ComponentFixture<EditarColeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarColeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
