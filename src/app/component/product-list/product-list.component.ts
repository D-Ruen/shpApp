import { style } from '@angular/animations';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultsRequest } from 'src/app/models/results-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isDisplayModal:boolean=false
  modalProduct: Product |undefined
  @Input() isLoading:boolean=true
  @Input() products: Product[] = []

  // product: object={
  //   name:"Robe pour femmes",
  //   description:"Jolie robe pour femmes",
  //   sold_prize: 129,
  //   regular_prize:189,
  //   isSolded:false,

  // }
 
  constructor(private productService: ProductService) { 
    // this.title="My Shop" pour permettre une mise a jour suivant l'objet
  }

  

  ngOnInit(): void {
   

}    
  

handleDeleteProduct(product: Product){
  this.products=this.products.filter(p =>p._id !==product._id)
  // console.log("handeDeleteProduct : ", product)
 }
handleDisplayViewModal(product:Product){
  
  if (product){
    this.isDisplayModal=true
    this.modalProduct=product
  }
}
handleCloseModal(){
  this.isDisplayModal=false
  this.modalProduct= undefined
}}
