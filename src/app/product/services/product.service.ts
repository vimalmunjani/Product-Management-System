import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = 'assets/api/product/product.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(this.productUrl).pipe(
       catchError(this.errorHandler)
     );
  }


  getProductById(id: string): Observable<Product>{

    return this.http.get(this.productUrl).pipe(
      catchError(this.errorHandler),
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

 private errorHandler(err: HttpErrorResponse) {
 
    let errorMessage = '';
    
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    
    return throwError(errorMessage);

 }

}
