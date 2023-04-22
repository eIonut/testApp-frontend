import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}
  public checkAndShowAlert(alertName: string, showAlertFn: () => void): void {
    const alertValue = localStorage.getItem(alertName);
    if (alertValue) {
      showAlertFn();
      localStorage.removeItem(alertName);
    }
  }

  public showDeleteAlert(): void {
    this.toastr.info('Deleted product.', '');
  }

  public showAddAlert(): void {
    this.toastr.success('Added product.', '');
  }

  public showEditAlert(): void {
    this.toastr.info('Product updated.', '');
  }
}
