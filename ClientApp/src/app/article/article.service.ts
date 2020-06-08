import { Injectable , Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IArticle } from './article';

@Injectable()
export class ArticleService {

  private apiURL;
  constructor(private _http: HttpClient, @Inject("BASE_URL") private baseURL: string) { }

  getArticles(): Observable<IArticle[]> {
    this.apiURL = this.baseURL + "api/Article/GetArticles";
    return this._http.get<IArticle[]>(this.apiURL);
  }

  createArticle(article: IArticle): Observable<IArticle> {
    this.apiURL = this.baseURL + "api/Article";
    return this._http.post<IArticle>(this.apiURL, article);

  }

  getArticle(articleId: string): Observable<IArticle> {

    this.apiURL = this.baseURL + "api/Article";
    return this._http.get<IArticle>(this.apiURL + '/' + articleId);
  }

}
