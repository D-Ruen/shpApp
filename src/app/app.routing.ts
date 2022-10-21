import { Routes } from "@angular/router";
import { SigninComponent } from "./component/auth/signin/signin.component";
import { SignupComponent } from "./component/auth/signup/signup.component";
import { ContactComponent } from "./component/contact/contact.component";
import { ContainerComponent } from "./component/container/container.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { ProductAdditionnalInfoComponent } from "./component/product-tabs/product-additionnal-info/product-additionnal-info.component";
import { ProductDescriptionComponent } from "./component/product-tabs/product-description/product-description.component";
import { ProductReviewsComponent } from "./component/product-tabs/product-reviews/product-reviews.component";
import { ProductVendorComponent } from "./component/product-tabs/product-vendor/product-vendor.component";
import { ProductComponent } from "./component/product/product.component";
import { ProductsCategoryComponent } from "./component/products-category/products-category.component";

export const ROUTES:Routes=[
    {
        path:'',
        component:ContainerComponent,
        pathMatch:"full"
    },
    {
        path:'product/:slug',
        component:ProductComponent,
        // pathMatch:"full"
        children:[
            {
                path:"",
                redirectTo:"description",
                pathMatch:"prefix"
            },
            {
                path:"description",
                component:ProductDescriptionComponent
            },
            {
                path:"additionnal-info",
                component:ProductAdditionnalInfoComponent,
            },
            {
                path:"product-vendor",
                component:ProductVendorComponent
            },
            {
                path:"product-reviews",
                component:ProductReviewsComponent
            }

        ]
    },
    {
        path:"products",
        component:ProductsCategoryComponent,
        pathMatch:'full'
    },
    {
        path:"contact",
        component:ContactComponent,
        pathMatch:"full"
    },
    {
        path:"signin",
        component:SigninComponent,
        pathMatch:"full"
    },
    {
        path:"signup",
        component:SignupComponent,
        pathMatch:"full"
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }

]