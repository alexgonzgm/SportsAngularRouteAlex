import { Component, OnInit } from '@angular/core';
import { IArticle } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: IArticle[];
  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this._articleService.getArticles().
      subscribe(articles => this.articles = articles, error => console.error(error));

  }

}
