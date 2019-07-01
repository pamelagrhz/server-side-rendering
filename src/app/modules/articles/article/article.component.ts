import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/shared/services/meta.service';

import { ArticlesService } from '../articles.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ArticlesService,
    private meta: MetaService
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
          this.article.img = environment.site_url + `assets/${(Math.floor(Math.random() * 3)).toString()}.jpeg`;
          this.meta.updateTitle(this.article.title, this.article.body);
          this.meta.updateMetaFB(this.article.title, this.article.img, this.article.body);
        }
      );
    }
  }

}
