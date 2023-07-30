import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatotipoListaComponent } from './contatotipo-lista.component';

describe('ContatotipoListaComponent', () => {
  let component: ContatotipoListaComponent;
  let fixture: ComponentFixture<ContatotipoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatotipoListaComponent]
    });
    fixture = TestBed.createComponent(ContatotipoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
