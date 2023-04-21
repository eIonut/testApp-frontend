import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  addDetailsForm = this.fb.group({
    productProperty: ['', Validators.required],
    productValue: ['', Validators.required],
  });

  editDetailsForm = this.fb.group({
    productName: ['', [Validators.required]],
    category: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    image: [null, Validators.required],
  });
  constructor(
    private dialogRef: MatDialogRef<EditProductComponent>,
    private fb: FormBuilder
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  onAddDetailsSubmit() {
    console.log('add details submitted');
  }

  onEditDetailsSubmit() {
    console.log('edit details submitted');
  }
}
