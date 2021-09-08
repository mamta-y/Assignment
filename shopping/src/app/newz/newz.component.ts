import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article, Articles, initialArticles } from './article.model';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-newz',
  templateUrl: './newz.component.html',
  styleUrls: ['./newz.component.css']
})
export class NewzComponent implements OnInit {
  countryForm: FormGroup;
  articles: Articles = initialArticles;
  isLoading:boolean;
  constructor(private service: NewsService, private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.countryForm = this.buildCountryForm();
  }
  buildCountryForm(): FormGroup {
    return this.fb.group({
      country: ['', [Validators.required]]
    })
  }

  openArticle(url: string) {
    window.open(url, "_blank");
  }

  getNews(){
    this.isLoading =true;
    this.service.getNewsService(this.countryForm.get('country').value).subscribe(
      (resp: Articles) => {
        this.isLoading=false;
        this.articles = resp
      }
    );

  }
}
