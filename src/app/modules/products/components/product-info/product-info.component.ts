import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      price: 222,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      price: 322,
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category 1',
      price: 522,

      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Category 2',
      price: 444,
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: 'https://via.placeholder.com/200',
    },
  ];
}
