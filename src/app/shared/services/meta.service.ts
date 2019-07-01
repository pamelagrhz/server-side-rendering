import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { map, mergeMap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private site_name = " | Server Side Rendering";

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public updateMetaInfo(content, author, category) {
    this.meta.updateTag({ name: 'description', content: content });
    this.meta.updateTag({ name: 'author', content: author });
    this.meta.updateTag({ name: 'keywords', content: category });
  }

  public updateTitle(title?: string, description?: string) {
    if (!title) {
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) { route = route.firstChild; }
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)).subscribe((event) => {
            this.title.setTitle(event['title'] + this.site_name);
            this.meta.updateTag({name: 'description', content: description});
            this.updateMetaInfo(event['description'], 'Miguel Garcia', 'Ocio');
          });
    } else {
      this.title.setTitle(title + this.site_name);
      this.meta.updateTag({name: 'description', content: description});
    }
  }

  public updateMetaFB(title: string, image: string, description: string){
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content:  image});
  }

}
