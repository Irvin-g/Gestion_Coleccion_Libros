import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarColeccionComponent } from './agregar-coleccion.component';

describe('AgregarColeccionComponent', () => {
  let component: AgregarColeccionComponent;
  let fixture: ComponentFixture<AgregarColeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarColeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
