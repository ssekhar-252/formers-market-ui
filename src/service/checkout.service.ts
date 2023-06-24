import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/CheckoutSystem/products`
    );
  }

  public scanProduct(productCode: string): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/CheckoutSystem/scan-item/${productCode}`
    );
  }

  public printBasket(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/CheckoutSystem/print-particulars`
    );
  }

  public clearBasket(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/CheckoutSystem/clear-basket`
    );
  }
}
