import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../models/products.model';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public fileContent: string | ArrayBuffer | null = '';

  public product!: IProduct;

  public editDetailsForm: FormGroup<any> = this.fb.group({
    name: ['', [Validators.required]],
    category: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required]],
  });
  public errorMessage: string = '';

  constructor(
    private dialogRef: MatDialogRef<EditProductComponent>,
    private fb: FormBuilder,
    private productsApiService: ProductsApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.product = data;
  }

  ngOnInit(): void {
    this.editDetailsForm.patchValue({
      name: this.product?.name || '',
      category: this.product?.category || '',
      description: this.product?.description || '',
      price: this.product?.price || '',
    });
    this.fileContent = this.product?.image;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public updateProduct(): void {
    if (this.errorMessage === 'Selected file is not an image') {
      return;
    }
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
      if (file.type.startsWith('image/')) {
        this.errorMessage = '';
        const reader = new FileReader();
        reader.onload = (e) => {
          this.fileContent = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.errorMessage = 'Selected file is not an image';
      }
    }
  }
}
