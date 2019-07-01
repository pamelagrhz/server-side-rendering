import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';


@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
