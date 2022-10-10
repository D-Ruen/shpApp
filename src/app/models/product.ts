export interface Product {
    _id:string,
    name:string,
    description:string,
    category:string[],
    sold_price:number,
    regular_price:number,
    imageUrl:string[],
    created_at:Date,
    updated_at?:Date,
}
