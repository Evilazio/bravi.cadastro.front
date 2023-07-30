import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaListaComponent } from './pessoa-lista.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipeModule } from 'src/app/pipes/filter/filter.pipe.module';
import { FormsModule } from '@angular/forms';

describe('PessoaListaComponent', () => {
  let component: PessoaListaComponent;
  let fixture: ComponentFixture<PessoaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaListaComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FilterPipeModule, FormsModule],
    });
    fixture = TestBed.createComponent(PessoaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
