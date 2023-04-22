import { Component } from '@angular/core';
import { EditProductComponent } from '../edit-product/edit-product.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductsApiService } from '../../services/products-api.service';
import { IProduct } from '../../models/products.model';
import { Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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

    this.checkAndShowAlert('DeleteAlert', this.showDeleteAlert.bind(this));
    this.checkAndShowAlert('AddAlert', this.showAddAlert.bind(this));
    this.checkAndShowAlert('EditAlert', this.showEditAlert.bind(this));
  }

  deleteProduct(id: string) {
    console.log(id);
    this.productsApiService.deleteProduct(id).subscribe(() => {
      localStorage.setItem('DeleteAlert', 'Delete');
      window.location.href = '/products';
    });
  }

  private checkAndShowAlert(alertName: string, showAlertFn: () => void) {
    const alertValue = localStorage.getItem(alertName);
    if (alertValue) {
      showAlertFn();
      localStorage.removeItem(alertName);
    }
  }

  showDeleteAlert() {
    this.toastr.info('Deleted product.', '');
  }

  showAddAlert() {
    this.toastr.success('Added product.', '');
  }

  showEditAlert() {
    this.toastr.info('Product updated.', '');
  }
}
