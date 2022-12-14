import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ResultsRequest } from '../models/results-request';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[]=[];
  private urlApi: string= environment.serverUrl.products

  constructor(private http: HttpClient ) { }

  // getProducts():Promise<Product[]>{
  //   return new Promise((resolve,reject)=>{
  //     if(this.products.length){
  //       resolve(this.products)
  //     }
  //     else{
  //       reject([])
  //     }
  //   })
  // }

  getProducts():Observable<ResultsRequest<Product>>{
    return this.http.get<ResultsRequest<Product>>(this.urlApi)
    
  }

  getNumber():Observable<Number>{
    return of(45)
  }

  getSeconds():Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product){

  }

  editProduct(_id: string, product: Product){};
  deleteProduct(_id:string){}

}
