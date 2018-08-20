import { Api } from './../api/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './../../interfaces/Order';
import { catchError, tap } from 'rxjs/operators'; // put map here if needed
import { of } from 'rxjs/observable/of';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  private ordersUrl = 'http://localhost:807/balcaobalcao-api/public/api/orders';  // URL to web api
  private ordersEndpoint = 'orders';

  constructor(
    public http: HttpClient,
    public api: Api,
  ) {
    console.log('Hello OrderProvider Provider');
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
      .pipe(
        tap(orders => this.log('fetched orders')),
        catchError(this.handleError('getOrders', []))
      );
  }

  getOrdersFromApi(): Observable<Order[]> {
    return this.api.get<Order[]>(this.ordersEndpoint)
      .pipe(
        tap(orders => this.log('fetched orders')),
        catchError(this.handleError('getOrders', []))
      );
  }

  /** Log a OrderProvider message with the MessageService */
  private log(message: string) {
    console.log(`OrderProvider: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
