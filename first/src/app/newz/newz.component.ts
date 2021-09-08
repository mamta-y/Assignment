import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articles, initialArticles } from './article.model';
@Component({
  selector: 'app-newz',
  templateUrl: './newz.component.html',
  styleUrls: ['./newz.component.css']
})
export class NewzComponent implements OnInit {
  countryForm: FormGroup;
  articles: Articles = initialArticles;
  constructor(private service:NewsService,private fb: FormBuilder) { 
    
  }

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

  getCountryNews(){
    this.service.getNewsServiceByCountry(this.countryForm.get('country').value).subscribe(
      (resp: Articles) => {
        this.articles = resp
      }
    );

  }
}
