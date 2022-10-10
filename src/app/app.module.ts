import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContainerComponent } from './component/container/container.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ModalProductViewComponent } from './component/modal-product-view/modal-product-view.component';


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
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
