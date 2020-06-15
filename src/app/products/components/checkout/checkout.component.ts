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
 customers: any;
  customerName: string;
  customerAddress: string;
  customerMobile: number;
  customerCity: string;
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
    
    product['Name'] = this.customerName;
    product['Address'] = this.customerAddress;
    product['City'] = this.customerCity;
    product['Mobile'] = this.customerMobile;
   
     
       this.ccs.addToCheckout(product)
  }
  

  // CreateRecord() {
  //   let record = {};
  //   record['Name'] = this.customerName;
  //   record['Address'] = this.customerAddress;
  //   record['City'] = this.customerCity;
  //   record['Mobile'] = this.customerMobile;
  //   this.ccs.create_NewCustomer(record).then(resp => {
  //     this.customerName = "";
  //     this.customerMobile = undefined;
  //     this.customerAddress = "";
  //     this.customerCity = "";
  //     console.log(resp);
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }


}
