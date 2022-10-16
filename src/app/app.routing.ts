import { Routes } from "@angular/router";
import { SigninComponent } from "./component/auth/signin/signin.component";
import { SignupComponent } from "./component/auth/signup/signup.component";
import { ContainerComponent } from "./component/container/container.component";
import { ProductComponent } from "./component/product/product.component";

export const ROUTES:Routes=[
    {
        path:'',
        component:ContainerComponent,
        pathMatch:"full"
    },
    {
        path:'product/:slug',
        component:ProductComponent,
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
    }

]