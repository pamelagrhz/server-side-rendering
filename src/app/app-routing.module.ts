import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "articles",
    loadChildren: () => import('./modules/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: "article/:id",
    loadChildren: () => import('./modules/articles/article/article.module').then(m => m.ArticleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
