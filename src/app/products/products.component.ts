import { Component, Input } from '@angular/core';

type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
} | undefined;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() product: Product;
}
