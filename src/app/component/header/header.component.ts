import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  data:Number |undefined=0
  second:Number |undefined=0
  secondSub:Subscription |undefined
  siteName:string=environment.siteName
  navs_data: Item[]= nav_items
  auths_data:Item[]=auth_items
  isDisplayedMobileNav:boolean=false
  
  constructor(private productService :ProductService) { }

  ngOnInit(): void  {
    // this.productService.getNumber().subscribe((value)=>{
    //   this.data=value})
    this.secondSub= this.productService.getSeconds().subscribe({
      next: (value:Number)=>{
        this.second =value
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete: ()=>{
        console.log("complete")
      },
    }) 
 
    
  }
 

  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }
  handleDisplayMobileNav(){
    this.isDisplayedMobileNav=!this.isDisplayedMobileNav
  }
  handleCloseMobileNav(){
    this.isDisplayedMobileNav=false
  }
    
  }


