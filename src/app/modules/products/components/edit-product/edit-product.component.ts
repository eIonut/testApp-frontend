import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public addDetailsForm: FormGroup<any> = this.fb.group({
    productProperty: ['', Validators.required],
    productValue: ['', Validators.required],
  });

  public editDetailsForm: FormGroup<any> = this.fb.group({
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

  public close(): void {
    this.dialogRef.close();
  }

  public onAddDetailsSubmit(): void {
    console.log('add details submitted');
  }

  public onEditDetailsSubmit(): void {
    console.log('edit details submitted');
  }
}
