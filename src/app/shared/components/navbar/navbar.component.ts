import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AddProductComponent } from 'src/app/modules/products/components/add-product/add-product.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public addProductDialogRef: MatDialogRef<AddProductComponent> | null = null;
  public isLoggedIn = false;

  constructor(private dialog: MatDialog, private auth: AuthService) {}
  public openAddDialog(): void {
    this.addProductDialogRef = this.dialog.open(AddProductComponent, {
      width: '400px',
    });
  }

  public logout(): void {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.auth.loggedIn.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
