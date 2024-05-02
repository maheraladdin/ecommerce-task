import { Component } from '@angular/core';
import { Products } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-task';
  products = Products;

  onProductAdded(productData: {name: string, price: number, description: string, image: string}) {
    this.products.unshift({
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image
    });
  }
}
