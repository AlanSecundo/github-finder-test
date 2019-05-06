import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from '../modal.component';

fdescribe('modal.component.spec.ts', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Componente MODAL deve renderizar sem nenhum erro', () => {
    const componentInstance = fixture.componentInstance;
    expect(componentInstance).not.toBeNull();
  });
});
