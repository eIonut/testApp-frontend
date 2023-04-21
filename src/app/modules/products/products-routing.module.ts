import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'product',
    component: ProductInfoComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
