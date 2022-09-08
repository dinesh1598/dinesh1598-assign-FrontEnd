import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:number=2;
 
  defaultAmount:number=299;
  output:any=299;
constructor() { }
handler:any = null;
ngOnInit() {

  this.loadStripe();
}

pay(amount: number) {    

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      // console.log(token)
      alert('patment Successfull!!');
     
      
     

    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount * 100
  });

}

loadStripe() {
   
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51LdAnOSIN5e3ZWiUWGoAgx6rZpncjBL1jhOILvCHghuW9lBwai9tYkaoxJfu4KzW8bf1SLcrerzR3UVKRzwxbV5U00vmVDISWA',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}


  
  images=[
    {
      imageSrc:'https://images.unsplash.com/photo-1623411235843-1e0932d560ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
imageAlt:'1'
},
    {
      imageSrc:'https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  imageAlt:"3"
},
  {
    imageSrc:'https://images.unsplash.com/photo-1580087608274-bf7969a7e870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
imageAlt:'2'},


{
  imageSrc:'https://media.istockphoto.com/photos/wireless-earphone-in-the-girls-ear-picture-id1314954738?b=1&k=20&m=1314954738&s=170667a&w=0&h=GIOvrJPddyPdhPwQB-UGpPdhqsHznMkzVVu7KCOukEY=',imageAlt:'4'},
]

}

