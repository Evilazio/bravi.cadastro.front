import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from "@faker-js/faker";
import { of, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos$ = this.httpClient.get<any[]>(environment.API_URL + environment.API_PATH_PRODUTOS).pipe(shareReplay())
  teste = 1;
  constructor(
    private httpClient: HttpClient
  ) {
    if (environment.DEV) {
      console.log(environment.DEV)
      this.produtos$ = of(Array.from({ length: 5 }, x => ({
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }))).pipe(shareReplay())
    }
  }


}
