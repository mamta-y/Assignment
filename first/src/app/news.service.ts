import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY: string = '54c460b322d54303a350fb73c19a8b17';
  url: string = 'http://newsapi.org/v2/everything?qInTitle=';
  params: string = '&inflation&from=YYYY-MM-DD&sortBy=relevancy&apiKey=' //REPLACE YYYY-MM-DD WITH VALID DATE WITHIN ONE MONTH OF RUNNING APP
  
  constructor(private http: HttpClient) { }

  getNewsServiceByCountry(country: string) {
    return this.http.get(this.url + country + this.params + this.API_KEY);
  }
}

