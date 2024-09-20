import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallestareasComponent } from './detallestareas.component';

describe('DetallestareasComponent', () => {
  let component: DetallestareasComponent;
  let fixture: ComponentFixture<DetallestareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallestareasComponent]
    });
    fixture = TestBed.createComponent(DetallestareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
