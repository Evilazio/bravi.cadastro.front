import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faker } from "@faker-js/faker";
import { of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoas$ = this.httpClient.get<any[]>(environment.API_URL + environment.API_PATH_PRODUTOS).pipe(shareReplay())

  constructor(
    private httpClient: HttpClient
  ) {
    if (environment.DEV) {
      faker.seed(123)
      console.log(environment.DEV)
      this.pessoas$ = of(Array.from({ length: 15 }, x => ({
        userId: faker.string.uuid().slice(0,5),
        username: faker.internet.userName(),
        contact: Array.from({ length: 3 }, x => ({
          contactType: faker.helpers.arrayElement(['whatsapp', 'telefone', 'email']),
          value: faker.phone.number()
        }))
      }))).pipe(shareReplay())
    }
  }

}
