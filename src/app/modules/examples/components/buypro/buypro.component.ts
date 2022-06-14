import { Component, OnInit } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Component({
  selector: 'app-buypro',
  templateUrl: './buypro.component.html',
  styleUrls: ['./buypro.component.scss']
})
export class BuyproComponent implements OnInit {
  CLIENT_ID =
  'AcuoBGkN8FC3XiiQ4b6vDsm9HmI_39mSO1OA7-YJHQD0SWp9o8wnBq5E2y6mt-tXxsoVc027WuPKi1hU';
constructor() {}

ngOnInit(): void {
  this.loadPaypal();
}

loadPaypal() {
  loadScript({ 'client-id': this.CLIENT_ID })
    .then((paypal) => {
      paypal
        .Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
          },
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  description: 'Angular Pivot Table Pro',
                  amount: { currency_code: 'USD', value: '50' },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {
              // Full available details
              console.log(
                'Capture result',
                orderData,
                JSON.stringify(orderData, null, 2)
              );

              // Show a success message within this page, e.g.
              const element = document.getElementById(
                'paypal-button-container'
              );
              element.innerHTML = '';
              const message = '<h3>Thank you for your payment!</h3>';
              const info = '<h4>Please click the button below to download. It contains the Angular Pivot Table Pro and instructions to install</h4>';
              const linkToDownload =
                "<a class='download' style='text-decoration: none;color: white;padding: 6px 10px;border: 1px solid rgb(215, 214, 221);background-color: #4242f3;margin-left: 4px;border-radius: 5px;' href='https://curiouslinks.com/angtree47/angular-tree-grid-pro.zip'>Download Angular Tree Grid Pro</a>";
              element.innerHTML = message + linkToDownload;

              // Or go to another URL:  actions.redirect('thank_you.html');
            });
          },

          onError: function (err) {
            console.log(err);
          },
        })
        .render('#paypal-button-container')
        .catch((error) => {
          console.error('failed to render the PayPal Buttons', error);
        });
    })
    .catch((error) => {
      console.error('failed to load the PayPal JS SDK script', error);
    });
}

}
