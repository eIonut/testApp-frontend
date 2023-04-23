import { ProductsApiService } from './../../services/products-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  public fileContent: string | ArrayBuffer | null = '';
  @ViewChild('fileInput') fileInput!: ElementRef;
  public fileInputValue = '';
  public errorMessage: string = '';
  public addNewProductForm: FormGroup<any> = this.fb.group({
    name: ['', [Validators.required]],
    category: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
  });
  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>,
    private fb: FormBuilder,
    private productsApiService: ProductsApiService,
    private toastr: ToastrService
  ) {}

  ngAfterViewInit(): void {
    this.fileInputValue = this.fileInput.nativeElement.value;
  }

  public onAddNewProductSubmit(): void {
    if (this.fileInput.nativeElement.value === '') {
      this.errorMessage = 'Image is required';
      return;
    }

    const formData = {
      ...this.addNewProductForm.value,
      image: this.fileContent,
    };
    this.productsApiService.addProducts(formData).subscribe(
      (response) => {
        localStorage.setItem('AddAlert', 'Add');
        window.location.href = '/products';
      },
      (error) => {
        if (error.status === 413) {
          this.errorMessage = 'The file is too large';
        }
      }
    );
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

  public close(): void {
    this.dialogRef.close();
  }
}
