import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from 'src/app/home/components/search/search.component';
import { HomeComponent } from '../home.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('home.components.spec.ts', () => {
  let componentInstance;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Componente HOME deve renderizar sem nenhum erro', () => {
    const componentInstance = fixture.componentInstance;
    expect(componentInstance).not.toBeNull();
  });
});
