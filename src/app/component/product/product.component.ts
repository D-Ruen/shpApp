
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultsRequest } from 'src/app/models/results-request';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  slug: string | undefined
  product:Product|undefined
  resultData:ResultsRequest<Product>|undefined 
  productSub: Subscription | undefined
  isloading:boolean=true
  currentImage: string|undefined

  constructor(private route: ActivatedRoute, private productService: ProductService) {   }

 

  ngOnInit(): void {
     
    window.scrollTo(0,0)
    this.slug=this.route.snapshot.params["slug"]
    this.productSub=this.productService.getProducts().subscribe({
      next:(resultData: ResultsRequest<Product>)=>{
        if(resultData.isSuccess){
        this.product= resultData.results.filter(p=>p.slug===this.slug)[0]
        this.currentImage= this.product.imageUrl[0]
        // console.log(this.product)
        }
        this.isloading=false
        
        
      },
      error:(error: any)=>{
        console.log("error: ",error )
        this.isloading=true
      },  
            
    })
  }
  ngOnDestroy(){
    this.productSub?.unsubscribe()
  }
  handleChangeCurrentImage(url:string){
    this.currentImage= url
  }

}
