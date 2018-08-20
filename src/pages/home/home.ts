import { Observable } from 'rxjs';
import { Order } from './../../interfaces/Order';
import { OrderProvider } from './../../providers/order/order';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  orders$: Observable<Order[]>;
  orders: Order[];

  constructor(
    public navCtrl: NavController,
    public orderProvider: OrderProvider,
  ) {

  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    // this.orders$ = this.orderProvider.getOrders();
    this.orders$ = this.orderProvider.getOrdersFromApi();
    this.orders$
      .subscribe((orders:Order[]) => {
        this.orders = orders;
        console.log(this.orders);
        console.log(this.orders[0]);
        console.log(typeof this.orders[0]);
        // console.log(this.orders[0].test());

        console.log(this.orders[0] instanceof Order);
        let reorder = new Order(this.orders[0]); // this is just a test, you can map this on provider
        console.log(reorder instanceof Order);
        console.log(typeof reorder);
        console.log(reorder.test());
      });
  }

}
