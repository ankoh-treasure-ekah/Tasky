import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  private STORE = localStorage; // this is good dev work

  set(key: string, data: any) {
    try {
      let response: any[] = <any>this.STORE.getItem(key);

      // var response: string[] = ['hello'];

      if (response == null) {

        this.STORE.setItem(key, JSON.stringify([]));
        let localResponse:any[] = <any>this.STORE.getItem(key);
        localResponse = JSON.parse(<any>localResponse);

        localResponse.push(data);

        this.STORE.setItem(key, <any>JSON.stringify(localResponse));
        return true;

      }
    
      response = JSON.parse(<any>response);
      response.push(data)

      this.STORE.setItem(key, JSON.stringify(response)); 
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  get(key: string) {
    try {
      const response = JSON.parse(this.STORE.getItem(key) ?? '');
      return {
        status: true,
        data: response
      }
    } catch (error) {
      return {
        status: false,
        data: null
      }
    }
  }

  update(key: string, data: any) {
    this.STORE.setItem(key, JSON.stringify(data));
    return true
  }

}
