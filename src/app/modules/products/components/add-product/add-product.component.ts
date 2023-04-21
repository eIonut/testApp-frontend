import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  public addNewProductForm: FormGroup<any> = this.fb.group({
    productName: ['', [Validators.required]],
    category: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    image: [null, Validators.required],
  });
  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>,
    private fb: FormBuilder
  ) {}

  public onAddNewProductSubmit(): void {
    console.log('add new product submitted');
  }

  public close(): void {
    console.log('dialog closed');
    this.dialogRef.close();
  }
}
