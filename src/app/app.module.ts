import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContainerComponent } from './component/container/container.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ModalProductViewComponent } from './component/modal-product-view/modal-product-view.component';
import { SigninComponent } from './component/auth/signin/signin.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ RouterModule} from'@angular/router'
import { ROUTES } from 'src/app/app.routing';
import { LoadingComponent } from './component/loading/loading.component';
import { PaymentCardComponent } from './component/container/payment-card/payment-card.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductDescriptionComponent } from './component/product-tabs/product-description/product-description.component';
import { ProductAdditionnalInfoComponent } from './component/product-tabs/product-additionnal-info/product-additionnal-info.component';
import { ProductVendorComponent } from './component/product-tabs/product-vendor/product-vendor.component';
import { ProductReviewsComponent } from './component/product-tabs/product-reviews/product-reviews.component';
import { AsideNavComponent } from './component/aside-nav/aside-nav.component';
import { HomeSliderComponent } from './component/home-slider/home-slider.component';
import { ProductsCategoryComponent } from './component/products-category/products-category.component';
import { PageTitleComponent } from './page-title/page-title.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ModalProductViewComponent,
    SigninComponent,
    SignupComponent,
    LoadingComponent,
    PaymentCardComponent,
    ProductDetailsComponent,
    ProductDescriptionComponent,
    ProductAdditionnalInfoComponent,
    ProductVendorComponent,
    ProductReviewsComponent,
    AsideNavComponent,
    HomeSliderComponent,
    ProductsCategoryComponent,
    PageTitleComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
