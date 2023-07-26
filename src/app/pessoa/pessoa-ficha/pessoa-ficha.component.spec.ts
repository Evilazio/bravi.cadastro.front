import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFichaComponent } from './pessoa-ficha.component';

describe('PessoaFichaComponent', () => {
  let component: PessoaFichaComponent;
  let fixture: ComponentFixture<PessoaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaFichaComponent]
    });
    fixture = TestBed.createComponent(PessoaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
