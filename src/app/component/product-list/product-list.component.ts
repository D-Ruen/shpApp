import { style } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultsRequest } from 'src/app/models/results-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  isDisplayModal:boolean=false
  modalProduct: Product |undefined
  productsSub:Subscription |undefined
  isloading:boolean=true

  // product: object={
  //   name:"Robe pour femmes",
  //   description:"Jolie robe pour femmes",
  //   sold_prize: 129,
  //   regular_prize:189,
  //   isSolded:false,

  // }
  products: ResultsRequest<Product> |undefined
  constructor(private productService: ProductService) { 
    // this.title="My Shop" pour permettre une mise a jour suivant l'objet
  }

  ngOnInit(): void {
    // this.products= this.productService.getProducts()
    this.productsSub=this.productService.getProducts().subscribe({
      next:(products:ResultsRequest<Product>)=>{
        
        this.products=products
        console.log(products)
        // console.log(this.products);
        
        this.isloading=false
      },
      error:(error:any)=>{
        console.log("Error : ",error)
        this.isloading=true
      },
      complete:()=>{
        console.log("Complete !")
      },
    })

}    
  ngOnDestroy(){
    this.productsSub?.unsubscribe()
  }

handleDeleteProduct(product: Product){
  // this.products=this.products.filter(p =>p._id !==product._id)
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
}
}
