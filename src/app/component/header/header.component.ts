import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:Number |undefined=0
  second:Number |undefined=0
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    // this.productService.getNumber().subscribe((value)=>{
    //   this.data=value})
    this.productService.getSeconds().subscribe({
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

}
