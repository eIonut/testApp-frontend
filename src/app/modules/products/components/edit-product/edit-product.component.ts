import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/products.model';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public fileContent: any;

  public product!: IProduct;

  public editDetailsForm: FormGroup<any> = this.fb.group({
    name: ['', [Validators.required]],
    category: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required]],
  });

  constructor(
    private dialogRef: MatDialogRef<EditProductComponent>,
    private fb: FormBuilder,
    private productsApiService: ProductsApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.product = data;
  }

  ngOnInit() {
    this.editDetailsForm.patchValue({
      name: this.product?.name || '',
      category: this.product?.category || '',
      description: this.product?.description || '',
      price: this.product?.price || '',
    });
    this.fileContent = this.product?.image;
    console.log(this.fileContent);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public updateProduct() {
    const productData = {
      ...this.editDetailsForm.value,
      image: this.fileContent,
    };
    this.productsApiService
      .updateProduct(productData, this.product._id)
      .subscribe(() => {
        window.location.href = '/products';
        localStorage.setItem('EditAlert', 'Edit');
      });
  }

  public onFileSelected($event: Event): void {
    const files = ($event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fileContent = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
