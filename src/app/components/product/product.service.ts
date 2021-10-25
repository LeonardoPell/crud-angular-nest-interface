import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductRequest, ProductResponse } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlRequest = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string){
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  select(id: number): Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.urlRequest+'/'+id);
  }

  update(product: ProductRequest, id: number): Observable<ProductResponse>{
    return this.http.put<ProductResponse>(this.urlRequest+'/'+id,product);
  }

  create(product: ProductRequest): Observable<ProductResponse>{
    return this.http.post<ProductResponse>(this.urlRequest,product);
  }

  read(): Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(this.urlRequest);
  }

  delete(id: number): Observable<ProductResponse>{
    return this.http.delete<ProductResponse>(this.urlRequest+'/'+id);
  }

}
