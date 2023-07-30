import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  private cache: Map<string, Observable<any>> = new Map<string, Observable<any>>();

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string, options?: RequestOptions): Observable<T> {
    const cacheKey = this.getCacheKey(url);
    const cachedResponse = this.cache.get(cacheKey);
    console.log(cacheKey)

    if (!cachedResponse) {
      this.cache.set(cacheKey, this.httpClient.get<T>(url, options).pipe(shareReplay(1)));
    } 

    return this.cache.get(cacheKey) as Observable<T>;
  }

  // Métodos para limpar o cache em outras operações HTTP
  post<T>(url: string, body: any, options?: RequestOptions): Observable<any> {
    this.clearCache();
    return this.httpClient.post<T>(url, body, options);
  }

  put<T>(url: string, body: any, options?: RequestOptions): Observable<any> {
    this.clearCache();
    return this.httpClient.put<T>(url, body, options);
  }

  patch<T>(url: string, body: any, options?: RequestOptions): Observable<any> {
    this.clearCache();
    return this.httpClient.patch<T>(url, body, options);
  }

  delete<T>(url: string, options?: RequestOptions): Observable<any> {
    this.clearCache();
    return this.httpClient.delete<T>(url, options);
  }

  private getCacheKey(url: string): string {
    // Você pode personalizar a forma como a chave de cache é gerada.
    // Nesse exemplo, usamos a própria URL como chave.
    return url;
  }

  private clearCache() {
    this.cache.clear();
  }

}

type RequestOptions = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};