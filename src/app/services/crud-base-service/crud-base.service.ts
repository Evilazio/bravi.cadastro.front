import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay, switchMap, tap } from 'rxjs';
import { HttpCacheService } from '../http-cache/http-cache.service';
import * as jsonpatch from 'fast-json-patch';
import { BaseDTO } from 'src/app/models/base/baseDTO';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudBaseService<T extends BaseDTO> {

  constructor(
    public API_URL: string,
    public API_PATH: string,
    protected httpCacheService: HttpCacheService
  ) {
    this.refreshTrigger$.subscribe(x => {
      console.log('REFRESH TRIGGER DISPARADO ' + x.toISOString())
    })
  }

  public refreshTrigger$ = new BehaviorSubject(new Date());

  public get$ = this.refreshTrigger$.pipe(switchMap(x => this.httpCacheService.get<T[]>(this.API_URL + this.API_PATH).pipe<T[]>(shareReplay(1))));
  public getId$ = (id: string) => this.refreshTrigger$.pipe(switchMap(x => this.httpCacheService.get<T>(this.API_URL + this.API_PATH + id)));
  public delete$(id: string) { return this.httpCacheService.delete<T[]>(this.API_URL + this.API_PATH + id).pipe<T>(tap(x => this.refreshTrigger$.next(new Date()))) };
  public insert$(item: T) { return this.httpCacheService.post<T>(this.API_URL + this.API_PATH, item).pipe<T>(tap(x => this.refreshTrigger$.next(new Date()))); };
  public update$(oldItem: T, updatedItem: T) {
    const jsonPatchCompare = jsonpatch.compare(oldItem, updatedItem);
    return this.httpCacheService.patch<T[]>(this.API_URL + this.API_PATH + oldItem.id, jsonPatchCompare)
      .pipe<T>(tap(x => this.refreshTrigger$.next(new Date())));
  };


}