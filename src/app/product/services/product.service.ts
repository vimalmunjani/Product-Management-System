import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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


  getProductById(id: string): Observable<Product>{

    return this.http.get(this.productUrl).pipe(
      map((products: Product[]) => products.find(p => p.productId === id))
    );

    // this.http.get(this.productUrl).pipe(
    //   filter((p: Product) => {
    //     console.log('p filter', p);
    //     return p.productId === id;
    //   })
    // ).subscribe(product => {
    //   console.log('product in service after filter', product);
    // });
    
 }

}
