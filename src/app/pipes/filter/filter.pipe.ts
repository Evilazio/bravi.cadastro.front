import { Injectable, Pipe, PipeTransform } from '@angular/core';
import Fuse from 'fuse.js';




@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[key:string]: any}> implements PipeTransform {

  transform(items: T[], properties: string[], value: string): T[] {
    if (!items || !properties || !value) {
      return items;
    }

    const fuseOptions = {
      isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: properties
    };
    
    const fuse = new Fuse(items, fuseOptions);
    return fuse.search(value).map(resultado => resultado.item);
  }

}
