import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('search.component.spec.ts', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Componente SEARCH deve renderizar sem nenhum erro', () => {
    const componentInstance = fixture.componentInstance;
    expect(componentInstance).not.toBeNull();
  });
});
