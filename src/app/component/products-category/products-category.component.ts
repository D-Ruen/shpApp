import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResultsRequest } from 'src/app/models/results-request';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit,OnDestroy {

  constructor(private productService: ProductService, private categoryService: CategoriesService) { }

  categories: ResultsRequest<Category> |undefined
  products: Product []=[]
  productSub:Subscription |undefined
  categorySub: Subscription |undefined
  currentCategory:Category|undefined
  isLoading:boolean=true
  
  ngOnInit(): void {
    
    
    this.categorySub=this.categoryService.getCategories().subscribe({
      next:(result: ResultsRequest<Category>)=>{
     
        if(result.isSuccess){
          this.categories=result
          this.handleClickCategory(null,this.categories.results[0])
          
        }
      },
      error:(error)=>{
        console.log("error : ",error)
      }
    
    })

  }


  ngOnDestroy(): void {
    this.categorySub?.unsubscribe()
    this.productSub?.unsubscribe()
  }

  handleClickCategory(event :any,category :Category){
    this.currentCategory=category
    if(event){
    event.preventDefault()
    }
    this.isLoading=true
    this.productSub=this.productService.getProducts().subscribe({
      next:(result:ResultsRequest<Product>)=>{
        if(result.isSuccess){
          let products =result.results
          
          this.products=products.filter((product: Product )=>{
            for (let index=0; index< product.categories.length; index++ ){
              if(product.categories[index].slug===category.slug){
                return true
              };

            }
            return false
          })
        this.isLoading=false
      }
    }
    })
  }
}
