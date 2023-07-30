import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFichaComponent } from './pessoa-ficha.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('PessoaFichaComponent', () => {
  let component: PessoaFichaComponent;
  let fixture: ComponentFixture<PessoaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaFichaComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(PessoaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
