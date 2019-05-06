import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRepositoriesComponent } from '../list-repositories.component';
import { ModalComponent } from '../components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

declare var $: any;

fdescribe('list-repositories.components.spec.ts', () => {
  let component;
  let fixture: ComponentFixture<ListRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRepositoriesComponent, ModalComponent],
      imports: [HttpClientModule,  RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Componente List deve renderizar sem nenhum erro', () => {
     const componentInstance = fixture.componentInstance;
     expect(componentInstance).not.toBeNull();
   });
});
