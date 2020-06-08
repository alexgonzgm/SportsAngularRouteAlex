import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArticle } from '../article';
import { ArticleService } from '../article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private _articleService: ArticleService, private router: Router, private activedRoute: ActivatedRoute) { }

  public formGroup: FormGroup;
  public modoEdicion: boolean = false;
 public  articleId: number;

  ngOnInit() {

    this.formGroup = this.fb.group({
      name: '',
      category: '',
      price: ''
    });
    console.log(this.activedRoute);
    this.activedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;

      } else {
        this._articleService.getArticle(params["id"]).subscribe(value => {
          this.formGroup = this.fb.group({
            name: value.name,
            category: value.category,
            price: value.price
          })

        })
      }
     
      this.modoEdicion = true;
      this.articleId = params["id"];
    })
  }
  
  save() {
    let article: IArticle = Object.assign({}, this.formGroup.value);
    this._articleService.createArticle(article).subscribe(article => this.onSaveSuccess()),
      error => console.error(error);
  }

  onSaveSuccess() {
    this.router.navigate(["/article"]);
  }


}
