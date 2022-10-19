import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultsRequest } from 'src/app/models/results-request';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  productsSub: Subscription | undefined
  products: Product[]=[]
  isLoading:boolean=true

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.productsSub=this.productService.getProducts().subscribe({
      next:(products:ResultsRequest<Product>)=>{
        if(products.isSuccess){
        
        this.products=products.results
        console.log(products)
        // console.log(this.products);
        this.isLoading=false
        
        }
      },
      error:(error:any)=>{
        console.log("Error : ",error)
        this.isLoading=true
      },
      complete:()=>{
        console.log("Complete !")
      },
    })
  }
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

}
