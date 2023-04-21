import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  public productId: string = '';
  product = {
    id: 1312313213,
    name: 'Mouse Gaming Wireless LOGITECH G Pro X Superlight, 25400 dpi, negru',
    category: 'Gaming',
    price: 222,
    description:
      '	Compatibil POWERPLAY, Tehnologie wireless LIGHTSPEED, 400 IPS, Microprocessor: 32-bit ARM, Autonomie 70 ore - miscare constanta',
    imageUrl: 'https://via.placeholder.com/200',
  };

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
  }
}
