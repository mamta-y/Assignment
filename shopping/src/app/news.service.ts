import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articles } from './newz/article.model';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY: string = '54c460b322d54303a350fb73c19a8b17'
  url: string = 'https://newsapi.org/v2/everything?q=tesla&from=2021-08-07&sortBy=publishedAt&';
  params: string = '&inflation&from=2021-09-08&sortBy=relevancy&apiKey='
  constructor( private http:HttpClient) { }
  getNewsService(country: string) {
    return this.http.get(this.url + country + this.params+ this.API_KEY);
  }
}
