import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListService {

  response: any;

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
