import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
  private cache: { [key: string]: any } = {};

  get(key: string): any {
    return this.cache[key];
  }

  set(key: string, value: any) {
    this.cache[key] = value;
  }

  clear() {
    this.cache = {};
  }
}
