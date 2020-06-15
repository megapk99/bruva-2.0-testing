import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { Product } from '../../interfaces/product.interface';
import { Checkout } from '../../interfaces/checkout.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: Product []= []
 user: firebase.User;
  constructor(private cs: CartService,private ccs:CheckoutService) { }

  ngOnInit(): void {

    this.cs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
      querySnapshot.forEach(doc => {
        this.products.push({ ...doc.data(), Id: doc.id })
      });
    });
  }

// checkout(frm){

// this.ccs.checkout(frm.value.name, frm.value.mobile, frm.value.address, frm.value.city)

// }

  addToCheckout(product: Product) {

       this.ccs.addToCheckout(product)
  }

  info(frm) {

this.ccs.info(frm.value.name, frm.value.address, frm.value.mobile, frm.value.city);

  }

}
