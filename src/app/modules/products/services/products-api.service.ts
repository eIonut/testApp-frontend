import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private apiUrl = 'http://16.16.160.196:3000';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<IProduct[]>(`${this.apiUrl}/products`, { headers });
  }

  public getProduct(id: string): Observable<IProduct> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<IProduct>(`${this.apiUrl}/products/${id}`, {
      headers,
    });
  }

  public addProducts(productData: any): Observable<IProduct> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<IProduct>(`${this.apiUrl}/products`, productData, {
      headers,
    });
  }

  public deleteProduct(id: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.delete(`${this.apiUrl}/products/${id}`, { headers });
  }

  public updateProduct(productData: any, id: string): Observable<IProduct> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.put<IProduct>(
      `${this.apiUrl}/products/${id}`,
      productData,
      {
        headers,
      }
    );
  }
}
