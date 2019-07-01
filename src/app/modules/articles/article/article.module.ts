import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
