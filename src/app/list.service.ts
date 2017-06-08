import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Link } from './link';

@Injectable()
export class ListService {

  public response: Link[];
  public newItems: Link[] = [];


  constructor(private http: Http) { }

  post(obj:Link):void {
    this.newItems.push(obj);
  }
  returnPost():Object{
    return this.newItems;
  }

  get() {
    return this.http.get('./assets/mock.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  handleError() {
    return 'Something went wrong....';
  }

}
