import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/products.model';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  public productId: string = '';
  public product$!: Observable<IProduct>;
  constructor(
    private route: ActivatedRoute,
    private productsApiService: ProductsApiService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
    this.product$ = this.productsApiService.getProduct(this.productId);
  }
}
