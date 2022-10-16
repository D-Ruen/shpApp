
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  slug: string | undefined
  product :Product |undefined 
  productSub: Subscription | undefined
  isloading:boolean=true
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { 
  }

  ngOnInit(): void {
     
    window.scrollTo(0,0)
    this.slug=this.route.snapshot.params["slug"]
    console.log("slug: ",this.slug)
    this.productSub=this.productService.getProducts().subscribe({
      next:(products: Product[])=>{
        this.product= products.filter(p=>p.slug===this.slug)[0]
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

}
