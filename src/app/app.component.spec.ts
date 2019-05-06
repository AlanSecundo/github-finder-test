import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


fdescribe('app.component.spec.ts', () => {

  let fixture: ComponentFixture<AppComponent>;
  let componentInstance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Componente APP deve renderizar sem nenhum erro', () => {
    const componentInstance = fixture.componentInstance;
    expect(componentInstance).not.toBeNull();
  });
});
