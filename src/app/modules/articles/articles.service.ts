import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  /**
   * getAll
   */
  public getAll() {
    return this.http.get(environment.articles).toPromise();
  }

  public getById(id){
    return this.http.get(environment.articles + `/${id}`).toPromise();
  }

}
