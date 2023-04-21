import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductComponent } from 'src/app/modules/products/components/add-product/add-product.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public addProductDialogRef: MatDialogRef<AddProductComponent> | null = null;

  constructor(private dialog: MatDialog) {}
  openAddDialog() {
    this.addProductDialogRef = this.dialog.open(AddProductComponent, {
      width: '400px',
    });
  }
}
