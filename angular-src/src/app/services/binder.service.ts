import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BinderService {

  constructor(private http: Http) { }

  getCardsByUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://159.65.52.170:3000/bindCards/getCardsByUser', user, {headers: headers})
      .pipe(map(res => res.json()));
  } 

  getBindedBindersByUser(cardData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://159.65.52.170:3000/bindedBinders/getBindedBindersByUser', cardData, {headers: headers})
      .pipe(map(res => res.json()));
  }    

  postBindedCard(cardData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://159.65.52.170:3000/bindCards/postBindedCard', cardData, {headers: headers})
      .pipe(map(res => res.json()));
  }  
  
  postBindedBinder(binderData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://159.65.52.170:3000/bindedBinders/postBindedBinder', binderData, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
