import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ResultsRequest } from '../models/results-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories: Category[]=[];
  private urlApi: string= environment.serverUrl.categories
  
  constructor(private http: HttpClient ) { }

  getCategories():Observable<ResultsRequest<Category>>{
    return this.http.get<ResultsRequest<Category>>(this.urlApi)
  }
}
