import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = 'assets/api/product/product.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(this.productUrl);
  }

}
