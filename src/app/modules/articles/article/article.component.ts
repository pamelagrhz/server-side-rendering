import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article: Object = {};

  constructor(
    private route: ActivatedRoute,
    private service: ArticlesService
  ) { }

  ngOnInit() {
    this.getById();
  }

  private getById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== undefined) {
      this.service.getById(id).then(
        article => {
          this.article = article;
        }
      );
    }
  }

}
