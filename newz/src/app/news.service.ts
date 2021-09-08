import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getnews(){
    return this.http.get<any>('https://newsapi.org/v2/everything?q=tesla&from=2021-08-08&sortBy=publishedAt&apiKey=54c460b322d54303a350fb73c19a8b17');
  }
}
