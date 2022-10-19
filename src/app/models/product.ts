import { Category } from "./category";

export interface Product {
    _id:string,
    name:string,
    description:string,
    categories:Category[],
    imageUrl:string[],
    slug?: string,
    author?:string, 
    created_at:Date,
    updated_at?:Date,
    sold_price:number,
    stock?:number,
    regular_price:number,
    color?:string[],
    size?:string[],
    additional_info?:string,
    vendor_info?:string,
    reviews?:string,
        
    
}
