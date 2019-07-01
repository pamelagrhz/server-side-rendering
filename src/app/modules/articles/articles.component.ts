import { Component, OnInit } from '@angular/core';

import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Object = [];

  constructor(
    private service: ArticlesService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  /**
   * Obtiene una lista de todos los articulos
   */
  private getAll() {
    this.service.getAll().then(
      articles => {
        this.articles = articles;
      }
    );
  }

}
