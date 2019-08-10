import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:Http) { }

  getCardById(card) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://159.65.52.170:3000/pokemontcg/getcard', card, {headers: headers})
      .pipe(map(res => res.json()));
  }  
}
