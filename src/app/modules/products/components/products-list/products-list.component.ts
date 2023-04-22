import { Component } from '@angular/core';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductsApiService } from '../../services/products-api.service';
import { IProduct } from '../../models/products.model';
import { Observable } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  public editProductDialogRef: MatDialogRef<EditProductComponent> | null = null;

  constructor(
    private dialog: MatDialog,
    private productsApiService: ProductsApiService,
    private alertService: AlertService
  ) {}

  public products$!: Observable<IProduct[]>;
  public openEditDialog(product: IProduct): void {
    this.editProductDialogRef = this.dialog.open(EditProductComponent, {
      width: '400px',
      data: product,
    });
  }

  ngOnInit() {
    this.products$ = this.productsApiService.getProducts();
    this.alertService.checkAndShowAlert(
      'DeleteAlert',
      this.alertService.showDeleteAlert.bind(this)
    );
    this.alertService.checkAndShowAlert(
      'AddAlert',
      this.alertService.showAddAlert.bind(this)
    );
    this.alertService.checkAndShowAlert(
      'EditAlert',
      this.alertService.showEditAlert.bind(this)
    );
  }

  deleteProduct(id: string) {
    console.log(id);
    this.productsApiService.deleteProduct(id).subscribe(() => {
      localStorage.setItem('DeleteAlert', 'Delete');
      window.location.href = '/products';
    });
  }
}
