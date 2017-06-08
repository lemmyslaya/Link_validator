import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Link } from './link';

@Injectable()
export class ListService {

  response: Link[];



  constructor(private http: Http) {}



  get() {
   	return this.http.get('./assets/mock.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  handleError() {

  }

}
