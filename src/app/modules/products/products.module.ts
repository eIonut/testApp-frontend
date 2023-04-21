import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductInfoComponent,
    AddProductComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductsRoutingModule],
})
export class ProductsModule {}
